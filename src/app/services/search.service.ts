import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { UserProfileDTO } from '../models/UserProfileDTO';

export interface BusinessWithImageUrl extends UserProfileDTO {
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private businessesUrl = 'http://localhost:8762/user/search';
  private imageUrl = 'http://images.spreezy.in';
  
  private searchSubject = new Subject<string>();
  private businessesSubject = new BehaviorSubject<BusinessWithImageUrl[]>([]);
  
  businesses$ = this.businessesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.initSearchSubscription(); 
  }

  private initSearchSubscription(): void {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.fetchBusinesses(query))
    ).subscribe(businesses => {
      this.businessesSubject.next(businesses);
    });
  }

  search(query: string): void {
    this.searchSubject.next(query);
  }

  clearSearch(): void {
    this.businessesSubject.next([]);
  }

  private fetchBusinesses(searchQuery: string): Observable<BusinessWithImageUrl[]> {
    const url = `${this.businessesUrl}/${searchQuery}`;
    
    return this.http.get<UserProfileDTO[]>(url).pipe(
      map(response => response.map(business => ({
        ...business,
        imageUrl: this.getImageUrl(business.profilePicture)
      }))),
      catchError(error => {
        return of([]);
      })
    );
  }

  getImageUrl(profilePicture: string): string {
    return profilePicture ? `${this.imageUrl}/${profilePicture}` : 'assets/logo.png';
  }
}