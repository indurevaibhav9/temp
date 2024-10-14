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

  private profileUrl = 'assets/data.json';
  private mainUrl = 'assets/main.json';
  private savedUrl = 'assets/saved.json';

  constructor(private http: HttpClient) { }

  getBusinesses(): Observable<any> {
    return this.http.get(this.profileUrl);
  }

  getMain(): Observable<any> {
    return this.http.get(this.mainUrl);
  }

  getSaved(): Observable<any> {
    return this.http.get(this.savedUrl);
  }

  //dummy json : https://dummyjson.com/c/2c5d-5b3e-4419-b5ee
  //backend url for business: http://192.168.1.9:8762/user/profile/tanvi247
  getBusinessDetails(): Observable<BusinessDetails[]> { // Return type changed to an array
    return this.http.get<BusinessDetails[]>('http://192.168.1.2:8762/user/profile/tanvi247', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }
  getProfilePosts(): Observable<AdvertisementDetails[]> {
    return this.http.get<{ advertisements: AdvertisementDetails[] }>('http://192.168.1.2:8082/feed/business/profile/tanvi247', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    }).pipe(
      map(response => response.advertisements) // Transform response to just the advertisements array
    );
  }
  getSavedPosts(): Observable<AdvertisementDetails[]> { // Return type changed to an array
    return this.http.get<AdvertisementDetails[]>('http://192.168.1.2:8082/feed/saved/tanvi247', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }

}
