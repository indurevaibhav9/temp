import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { UserInformation } from '../models/user-information';
import { BusinessInformation } from '../models/business-information';
import { PresignedUrl } from '../models/presigned-url';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private generatedFileNamesSubject = new BehaviorSubject<string[]>([]);
  generatedFileNames$ = this.generatedFileNamesSubject.asObservable();

  constructor(private http:HttpClient) { }

  setGeneratedFileNames(fileNames: string[]): void {
    this.generatedFileNamesSubject.next(fileNames);
    console.log('Generated file names:', fileNames);
  }

  getGeneratedFileNames(): string[] {
    return this.generatedFileNamesSubject.getValue();
  }

  getUserDetails(username: string): Observable<any> {
    return this.http.get(`http://192.168.1.104:8762/settings/consumer-details/${username}`,
      {
        responseType: 'text',
        headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
        'Content-Type': 'application/json',
        'accept': '*/*',
      }),
    });
  }

  postUserDetails(data:UserInformation):Observable<String>{
    return this.http.post(
      `http://192.168.1.104:8762/settings/update-consumer`,
      data,
      {
        responseType: 'text',
        headers: new HttpHeaders({
          'ngrok-skip-browser-warning': 'true',
          'Content-Type': 'application/json',
          'accept': '*/*',
        }),
      }
    );
  }

  getBusinessDetails(username: string): Observable<any> {
    return this.http.get(`http://192.168.1.104:8762/settings/business-details/${username}`,
      {
        responseType: 'text',
    });
  }

  postBusinessDetails(data:BusinessInformation):Observable<String>{
    return this.http.post(
      `http://192.168.1.104:8762/settings/update-business`,
      data,
      {
        responseType: 'text',
      }
    );
  }

  getPresignedUrl(imageFileNames: string[], username: string): Observable<PresignedUrl> {
    return this.http.post<PresignedUrl>(
      `http://192.168.1.104:8081/content/generate-presigned-url`,
      { imageFileNames, username },
    );
  }

  uploadToS3(file: File, presignedUrl: string){
    const headers = new HttpHeaders({ 'Content-Type': file.type });
    return this.http.put(
      presignedUrl,
      file,
      { headers }
    ).subscribe({
      next: (response) => {
        console.log('uploaded sucessfully', response);
      },
      error: (error:any) => {
        console.error('Error uploading image to S3:', error);
        console.error('Status:', error.status);
        console.error('Message:', error.message);
        console.error('Response:', error.error);
      }
    });
  }

  getImageLink(username:string,imageFileName:string): Observable<string>{
    return this.http.get(`http://192.168.1.104:8762/settings/get-image/${imageFileName}`,
      {
        responseType: 'text',
        headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
        'Content-Type': 'application/json',
        'accept': '*/*',
      }),
    });
  }

}
