import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AdvertisementDetails } from '../models/ad-details';
@Injectable({
  providedIn: 'root',
})
export class AdvertisementDetailsService {
  private baseUrl = 'https://dummyjson.com/c/c24e-729e-4ebc-a38f'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {}

  private handleError(error: any): void {
    const message = error?.error?.message || 'An unexpected error occurred';
    alert(message); // Display error in a simple popup
    console.error('Service Error:', error);
  }

  getAdvertisementDetailsById(advertisementId: number): Observable<AdvertisementDetails> {
    return this.http.get<AdvertisementDetails>(`${this.baseUrl}/c/e9c8-5ebd-4f70-a7b5/${advertisementId}`, {
      responseType: 'json',
    }).pipe(
      catchError(error => {
        this.handleError(error);
        throw error;
      })
    );
  }

  getAdvertisementDetails(): Observable<AdvertisementDetails[]> {
    return this.http.get<AdvertisementDetails[]>(`${this.baseUrl}/c/e9c8-5ebd-4f70-a7b5`, {
      responseType: 'json',
    }).pipe(
      catchError(error => {
        this.handleError(error);
        throw error;
      })
    );
  }

  updateLikes(advertisementId: number, callback: (updatedPost: AdvertisementDetails) => void) {
    return this.http.post<AdvertisementDetails>(
      `https://b053-2401-4900-1c44-5ce4-55a1-e786-aee0-8412.ngrok-free.app/content/advertisement/upvote/${advertisementId}`,
      {}, 
      {
        responseType: 'json',
      }
    ).subscribe({
      next: callback,
      error: (err) => this.handleError(err),
    });
  }

  updateDislikes(advertisementId: number, callback: (updatedPost: AdvertisementDetails) => void): void {
    this.http.post<AdvertisementDetails>(
      `https://b053-2401-4900-1c44-5ce4-55a1-e786-aee0-8412.ngrok-free.app/content/advertisement/downvote/${advertisementId}`,
      {}, 
      {
        responseType: 'json',
      }
    ).subscribe({
      next: callback,
      error: (err) => this.handleError(err),
    });
  }

  savePost(username: string, advertisementId: number, callback: (response: AdvertisementDetails) => void): void {
    this.http.post<AdvertisementDetails>(
      `https://b053-2401-4900-1c44-5ce4-55a1-e786-aee0-8412.ngrok-free.app/content/advertisement/save`,
      {},
      {
        responseType: 'json',
        headers: new HttpHeaders({
          'X-Username': username,
          'X-Advertisement-ID': advertisementId.toString(),
        }),
      }
    ).subscribe({
      next: callback,
      error: (err) => this.handleError(err),
    });
  }

  // New method to calculate expiry
  calculateExpiry(expiryDate: string): { remainingDays: number, remainingHours: number, isExpired: boolean } {
    const expiry = new Date(expiryDate);
    const currentDate = new Date();
    const timeDiff = expiry.getTime() - currentDate.getTime();
    
    const remainingDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    const remainingHours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
    
    const isExpired = remainingDays < 0 || (remainingDays === 0 && remainingHours <= 0);

    return { remainingDays, remainingHours, isExpired };
  }
}
