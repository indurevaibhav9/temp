import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OfferDescriptionDTO } from '../models/offerdescriptionGet';
import { AdvertisementDetails } from '../models/ad-details';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementDetailsService {
  private baseUrl = 'https://dummyjson.com/c/df4f-1d5c-44c9-a2a3'; // Replace with your actual API base URL

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
updateLikes(advertisementId: number): Observable<AdvertisementDetails> {
  return this.http.post<AdvertisementDetails>(
    `https://b053-2401-4900-1c44-5ce4-55a1-e786-aee0-8412.ngrok-free.app/content/advertisement/upvote/${advertisementId}`,
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
updateDislikes(advertisementId: number): Observable<AdvertisementDetails> {
  return this.http.post<AdvertisementDetails>(
    `https://b053-2401-4900-1c44-5ce4-55a1-e786-aee0-8412.ngrok-free.app/content/advertisement/downvote/${advertisementId}`,
    {}, 
    {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    }
  );
}
 // Save a post with an empty body
 savePost(username: string, advertisementId: number): Observable<AdvertisementDetails> {
  return this.http.post<AdvertisementDetails>(
    `https://b053-2401-4900-1c44-5ce4-55a1-e786-aee0-8412.ngrok-free.app/content/advertisement/save`, // Direct URL for saving
    {}, // Empty body
    {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
        'X-Username': username, // Sending username in headers
        'X-Advertisement-ID': advertisementId.toString(), // Sending advertisementId in headers
      }),
    }
  );
}

}
