import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInformation } from '../models/user-information';
import { BusinessInformation } from '../models/business-information';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http:HttpClient) { }

  getUserDetails(username: string): Observable<any> {
    return this.http.get(`https://583b-2409-40c2-102d-af53-f603-61fb-abdd-26f8.ngrok-free.app/Settings/consumer-details/${username}`,
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
      `https://583b-2409-40c2-102d-af53-f603-61fb-abdd-26f8.ngrok-free.app/Settings/update-consumer`,
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
    return this.http.get(`https://583b-2409-40c2-102d-af53-f603-61fb-abdd-26f8.ngrok-free.app/Settings/business-details/${username}`,
      {
        responseType: 'text',
        headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
        'Content-Type': 'application/json',
        'accept': '*/*',
      }),
    });
  }

  postBusinessDetails(data:BusinessInformation):Observable<String>{
    return this.http.post(
      `https://583b-2409-40c2-102d-af53-f603-61fb-abdd-26f8.ngrok-free.app/Settings/update-business`,
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

}
