import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OfferDescriptionDTO } from '../models/offerdescriptionGet';
import { AdvertisementDetails } from '../models/ad-details';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementDetailsService {
  private baseUrl = 'https://dummyjson.com/c/e9c8-5ebd-4f70-a7b5'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {}

  // Fetch offer descriptions
  getOfferDescription(): Observable<OfferDescriptionDTO[]> {
    return this.http.get<OfferDescriptionDTO[]>(`${this.baseUrl}/feed/advertisement/post`, {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }

  // Fetch advertisement details
  getAdvertisementDetails(): Observable<AdvertisementDetails[]> {
    return this.http.get<AdvertisementDetails[]>(`${this.baseUrl}/c/e9c8-5ebd-4f70-a7b5`, {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }

  // Update likes for a specific advertisement
  updateLikes(id: string): Observable<AdvertisementDetails> {
    return this.http.post<AdvertisementDetails>(
      `${this.baseUrl}/advertisement/${id}/like`,
      {}, // Assuming no body is needed; adjust as necessary
      {
        responseType: 'json',
        headers: new HttpHeaders({
          'ngrok-skip-browser-warning': 'true',
        }),
      }
    );
  }

  // Update dislikes for a specific advertisement
  updateDislikes(id: string): Observable<AdvertisementDetails> {
    return this.http.post<AdvertisementDetails>(
      `${this.baseUrl}/advertisement/${id}/dislike`,
      {}, // Assuming no body is needed; adjust as necessary
      {
        responseType: 'json',
        headers: new HttpHeaders({
          'ngrok-skip-browser-warning': 'true',
        }),
      }
    );
  }
}
