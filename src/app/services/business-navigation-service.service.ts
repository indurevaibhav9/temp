import { Injectable } from '@angular/core';
import { BusinessDetails } from '../models/BusinessDetails';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessNavigationServiceService {
  constructor(private http: HttpClient) { }

  Is_AdFeed:boolean = true
  Is_Insights:boolean = false
  Is_Post:boolean = false;
  Is_Notification:boolean = false;
  Is_Profile:boolean = false;

  getBusinessDetails(): Observable<BusinessDetails[]> { 
    return this.http.get<BusinessDetails[]>('http://localhost:8762/user/profile/tanvi247', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }
}