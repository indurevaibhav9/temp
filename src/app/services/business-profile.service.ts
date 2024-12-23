import { AdvertisementDetails } from 'src/app/models/ad-details';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusinessDetails } from '../models/BusinessRegistration/BusinessDetails';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  // Add username parameter to the method
  getBusinessDetails(username: string): Observable<BusinessDetails[]> {
    // Use backticks `` to construct the URL with the username
    return this.http.get<BusinessDetails[]>(`http://192.168.1.14:8761/user/profile/${username}`, {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }

  // Add username parameter to the method
  getProfilePosts(username: string): Observable<AdvertisementDetails[]> {
    return this.http.get<{ advertisements: AdvertisementDetails[] }>(`http://192.168.1.3:8082/feed/business/profile/${username}`, {
      responseType: 'json'
    }).pipe(
      map(response => response.advertisements) // Transform response to just the advertisements array
    );
  }

  // Add username parameter to the method
  getSavedPosts(username: string): Observable<AdvertisementDetails[]> {
    return this.http.get<AdvertisementDetails[]>(`http://192.168.1.3:8082/feed/saved/${username}`, {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }
}

