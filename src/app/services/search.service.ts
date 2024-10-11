import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private businessesUrl = 'assets/businesses.json';
  // private nearbyBusinessesUrl = 'assets/nearby-businesses.json';

  constructor(private http: HttpClient) { 
    console.log('SearchService initialized');
  }
  
  getBusinesses(searchQuery: string): Observable<{ name: string, username: string, profilePicture: string }[]> {
    const url = `${this.businessesUrl}/${searchQuery}`;
    
    console.log('Making GET request to:', url);

    const businessesObservable = this.http.get<{ name: string, username: string, profilePicture: string }[]>(url);
    
    console.log('Returning Observable for businesses:', businessesObservable);
    
    return businessesObservable.pipe(
      tap(response => console.log('API response:', response)),
      catchError(error => {
        console.error('Error fetching businesses:', error);
        throw error;
      })
    );
  }

  // getBusinesses(searchQuery: string): Observable<{ name: string, username: string, profilePicture: string }[]> {
  //   const url = `${this.businessesUrl}/${encodeURIComponent(searchQuery)}`;
  //   console.log('GET request url: ' + url);
  //   return this.http.get<{ name: string, username: string, profilePicture: string }[]>(url).pipe(
  //     tap(response => console.log('API response:', response)),
  //     catchError(error => {
  //       console.error('Error fetching businesses:', error);
  //       throw error;  // Rethrow the error after logging
  //     })
  //   );
  // }

  // getNearbyBusinesses(): Observable<{ name: string, username: string, profilePicture: string }[]> {
  //   return this.http.get<{ name: string, username: string, profilePicture: string }[]>(this.nearbyBusinessesUrl);
  // }
}
