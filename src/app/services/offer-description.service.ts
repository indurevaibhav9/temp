import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OfferDescriptionDTO } from '../models/offerdescriptionGet';

@Injectable({
  providedIn: 'root'
})
export class OfferDescriptionService {
  
  

  constructor(private http: HttpClient) {}

  getOfferDescription(): Observable<OfferDescriptionDTO> {
    return this.http.get<OfferDescriptionDTO>('https://af74-2401-4900-1c45-dbf8-eb96-cacf-9b8e-babd.ngrok-free.app/feed/consumer/post', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }
}
