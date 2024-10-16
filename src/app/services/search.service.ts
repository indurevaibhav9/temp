import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private businessesUrl = 'http://localhost:8762/user/search';

  constructor(private http: HttpClient) { 
    console.log('SearchService initialized');
  }
  
  getBusinesses(searchQuery: string): Observable<{ name: string, username: string, profilePicture: string }[]> {
    // Construct the URL to include the search query for server-side filtering
    const url = `${this.businessesUrl}/${searchQuery}`;
    console.log('Making GET request to:', url);
    
    // Add headers including ngrok-skip-browser-warning
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
}
