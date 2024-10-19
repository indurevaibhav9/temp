import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private businessesUrl = 'http://192.168.0.105:8762/user/search';
  private imageUrl = 'http://images.spreezy.in/';

  constructor(private http: HttpClient) { 
    console.log('SearchService initialized');
  }
  
  getBusinesses(searchQuery: string): Observable<{ name: string, username: string, profilePicture: string }[]> {
    const url = `${this.businessesUrl}/${searchQuery}`;
    console.log('Making GET request to:', url);
    
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    });
  
    return this.http.get<{ name: string, username: string, profilePicture: string }[]>(url, { headers })
      .pipe(
        tap(response => console.log('API response:', response)),
        catchError(error => {
          console.error('Error fetching businesses:', error);
          throw error;
        })
      );
  }

  getImageUrl(profilePicture: string): Observable<string> {
    const url = `${this.imageUrl}${profilePicture}`;
    console.log('Fetching image from URL:', url);

    return this.http.get(url, { responseType: 'text' })
      .pipe(
        tap(response => console.log('Fetched Image URL:', response)),
        catchError(error => {
          console.error('Error fetching image URL:', error);
          throw error;
        })
      );
  }
}
