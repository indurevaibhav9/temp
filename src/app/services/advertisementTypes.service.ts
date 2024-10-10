import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OfferDescriptionDTO } from '../models/offerdescriptionGet';



import { AdvertisementDetails } from '../models/ad-details';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementDetailsService {

  constructor(private http: HttpClient) {}

  // Updated return type to Observable<OfferDescriptionDTO[]>
  getOfferDescription(): Observable<OfferDescriptionDTO[]> {
    return this.http.get<OfferDescriptionDTO[]>('https://72f9-2401-4900-1c45-6dcb-9999-414a-c5aa-94a8.ngrok-free.app/feed/advertisement/post', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }

  // // Updated return type to Observable<EventDTO[]>
  // getEvent(): Observable<EventDTO[]> {
  //   return this.http.get<EventDTO[]>('https://72f9-2401-4900-1c45-6dcb-9999-414a-c5aa-94a8.ngrok-free.app/feed/advertisement/event', {
  //     responseType: 'json',
  //     headers: new HttpHeaders({
  //       'ngrok-skip-browser-warning': 'true',
  //     }),
  //   });
  // }

  // // Updated return type to Observable<PostDTO[]>
  // getPost(): Observable<PostDTO[]> {
  //   return this.http.get<PostDTO[]>('https://72f9-2401-4900-1c45-6dcb-9999-414a-c5aa-94a8.ngrok-free.app/feed/advertisement/post', {
  //     responseType: 'json',
  //     headers: new HttpHeaders({
  //       'ngrok-skip-browser-warning': 'true',
  //     }),
  //   });
  // }

  // Updated return type to Observable<CouponCodeDTO[]>
  // getCoupon(): Observable<CouponCodeDTO[]> {
  //   return this.http.get<CouponCodeDTO[]>('https://72f9-2401-4900-1c45-6dcb-9999-414a-c5aa-94a8.ngrok-free.app/feed/advertisement/coupon', {
  //     responseType: 'json',
  //     headers: new HttpHeaders({
  //       'ngrok-skip-browser-warning': 'true',
  //     }),
  //   });
  // }
  getAdvertisementDetails(): Observable<AdvertisementDetails[]> {
    return this.http.get<AdvertisementDetails[]>('https://dummyjson.com/c/e9c8-5ebd-4f70-a7b5', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }



}
