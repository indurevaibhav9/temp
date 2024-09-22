import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OfferDescriptionDTO } from '../models/offerdescriptionGet';
import { PostEventDTO } from '../models/posteventGet';  // Import your PostEventDTO model
import {PostWithImageDTO} from '../models/postwithimageGet'
import { PostWithImageCouponDTO } from '../models/postwithimagecouponGet';

@Injectable({
  providedIn: 'root'
})
export class OfferDescriptionService {

  constructor(private http: HttpClient) {}

  getOfferDescription(): Observable<OfferDescriptionDTO> {
    return this.http.get<OfferDescriptionDTO>('http://192.168.1.35:8082/feed/consumer/advertisement/offer-description', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
      
    });
  }

  getPostEvent(): Observable<PostEventDTO> {
    return this.http.get<PostEventDTO>('http://192.168.1.35:8082/feed/consumer/advertisement/post-event', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }

  getPostWithImage(): Observable<PostWithImageDTO> {
    return this.http.get<PostWithImageDTO>('http://192.168.1.35:8082/feed/consumer/advertisement/post-with-image', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }

  getPostWithImageCoupon(): Observable<PostWithImageCouponDTO> {
    return this.http.get<PostWithImageCouponDTO>('http://192.168.1.35:8082/feed/consumer/advertisement/post-with-image-coupon', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }
}
