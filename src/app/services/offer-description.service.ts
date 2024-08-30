import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OfferDescriptionDTO } from '../models/offerdescriptionGet';

@Injectable({
  providedIn: 'root'
})
export class OfferDescriptionService {
  private apiUrl = 'your-backend-api-url-here'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getOfferDescription(): Observable<OfferDescriptionDTO> {
    return this.http.get<OfferDescriptionDTO>(`${this.apiUrl}/offer-description`);
  }
}
