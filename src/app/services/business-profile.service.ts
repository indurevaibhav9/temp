import { AdvertisementDetails } from 'src/app/models/ad-details';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusinessDetails } from '../models/BusinessDetails';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  getBusinessDetails(username: string): Observable<BusinessDetails[]> {
    return this.http.get<BusinessDetails[]>(`http://192.168.1.3:8762/user/profile/${username}`, {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }

  getProfilePosts(username: string): Observable<AdvertisementDetails[]> {
    return this.http.get<{ advertisements: AdvertisementDetails[] }>(`http://192.168.1.3:8082/feed/business/profile/${username}`, {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    }).pipe(
      map(response => response.advertisements) // Since the output of profile posts gives an object with advertisements array
    );
  }

  getSavedPosts(username: string): Observable<AdvertisementDetails[]> {
    return this.http.get<AdvertisementDetails[]>(`http://192.168.1.3:8082/feed/saved/${username}`, {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }
}
