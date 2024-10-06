import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OfferDescriptionDTO } from '../models/offerdescriptionGet';
import { EventDTO } from '../models/EventGet';  // Import your PostEventDTO model
import {PostDTO} from '../models/PostGet'
import { CouponCodeDTO } from '../models/CouponCodeGet';

@Injectable({
  providedIn: 'root'
})
export class OfferDescriptionService {

  constructor(private http: HttpClient) {}

  getOfferDescription(): Observable<OfferDescriptionDTO> {
    return this.http.get<OfferDescriptionDTO>('https://72f9-2401-4900-1c45-6dcb-9999-414a-c5aa-94a8.ngrok-free.app/feed/advertisement/post', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
      
    });
  }

  getEvent(): Observable<EventDTO> {
    return this.http.get<EventDTO>('https://72f9-2401-4900-1c45-6dcb-9999-414a-c5aa-94a8.ngrok-free.app/feed/advertisement/event', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }

  getPost(): Observable<PostDTO> {
    return this.http.get<PostDTO>('https://72f9-2401-4900-1c45-6dcb-9999-414a-c5aa-94a8.ngrok-free.app/feed/advertisement/post', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }

  getCoupon(): Observable<CouponCodeDTO> {
    return this.http.get<CouponCodeDTO>('https://72f9-2401-4900-1c45-6dcb-9999-414a-c5aa-94a8.ngrok-free.app/feed/advertisement/coupon', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }
}
