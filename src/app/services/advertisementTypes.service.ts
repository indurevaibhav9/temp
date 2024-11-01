import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AdvertisementDetails } from '../models/ad-details';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementDetailsService {
  private baseUrl = 'https://dummyjson.com/c/c24e-729e-4ebc-a38f'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {}

  getAdvertisementDetailsById(advertisementId: number): Observable<AdvertisementDetails> {
    return this.http.get<AdvertisementDetails>(`${this.baseUrl}/c/e9c8-5ebd-4f70-a7b5/${advertisementId}`, {
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
 
  
  updateLikes(advertisementId: number, callback: (updatedPost: AdvertisementDetails) => void) {
    return this.http.post<AdvertisementDetails>(
      `https://b053-2401-4900-1c44-5ce4-55a1-e786-aee0-8412.ngrok-free.app/content/advertisement/upvote/${advertisementId}`,
      {}, 
      {
        responseType: 'json',
        headers: new HttpHeaders({
          'ngrok-skip-browser-warning': 'true',
        }),
      }
    ).subscribe({
      next: callback,
      error: (err) => {
        console.error('Error updating likes:', err);
       
      },
    });
  }

  
  updateDislikes(advertisementId: number, callback: (updatedPost: AdvertisementDetails) => void): void {
    this.http.post<AdvertisementDetails>(
      `https://b053-2401-4900-1c44-5ce4-55a1-e786-aee0-8412.ngrok-free.app/content/advertisement/downvote/${advertisementId}`,
      {}, 
      {
        responseType: 'json',
        headers: new HttpHeaders({
          'ngrok-skip-browser-warning': 'true',
        }),
      }
    ).subscribe({
      next: callback,
      error: (err) => {
        console.error('Error updating dislikes:', err);
        
      },
    });
  }

  
  savePost(username: string, advertisementId: number, callback: (response: AdvertisementDetails) => void): void {
    this.http.post<AdvertisementDetails>(
      `https://b053-2401-4900-1c44-5ce4-55a1-e786-aee0-8412.ngrok-free.app/content/advertisement/save`, // Direct URL for saving
      {},
      {
        responseType: 'json',
        headers: new HttpHeaders({
          'ngrok-skip-browser-warning': 'true',
          'X-Username': username, 
          'X-Advertisement-ID': advertisementId.toString(), 
        }),
      }
    ).subscribe({
      next: callback,
      error: (err) => {
        console.error('Error saving post:', err);
        
      },
    });
  }
}
