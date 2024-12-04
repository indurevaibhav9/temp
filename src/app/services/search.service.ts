import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { UserProfileDTO } from '../models/UserProfileDTO';
import { API_CONFIG } from 'src/app/api-config';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private businessesUrl = 'http://localhost:8762/user/search';
  private imageUrl = "https://images.spreezy.in";
  private followUrl = 'http://localhost:8762/user/follow';
  private unfollowUrl = 'http://localhost:8762/user/unfollow';
  
  private searchSubject = new Subject<string>();
  private businessesSubject = new BehaviorSubject<UserProfileDTO[]>([]);

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

  fetchBusinesses(searchQuery: string): Observable<UserProfileDTO[]> {
    const url = `${this.businessesUrl}/${searchQuery}`;
  private fetchBusinesses(searchQuery: string): Observable<UserProfileDTO[]> {
    const url = API_CONFIG.SEARCH_BUSINESSES(searchQuery);
    return this.http.get<UserProfileDTO[]>(url).pipe(
      catchError(() => of([]))
    );
  }

  getImageUrl(profilePicture: string | null | undefined): string {
    if (!profilePicture || profilePicture.trim() === '') {
      return 'assets/default-pic.png';
    }
    if (profilePicture.startsWith('http://') || profilePicture.startsWith('https://')) {
      return profilePicture;
    }
    return `${this.imageUrl}/${profilePicture}`;
  }

  toggleFollowStatus(sourceUsername: string, targetUsername: string, isFollowing: boolean): Observable<boolean> {
    const url = isFollowing
      ? `${this.followUrl}/${sourceUsername}/${targetUsername}` 
      : `${this.unfollowUrl}/${sourceUsername}/${targetUsername}`;
  
    const method = isFollowing ? 'post' : 'delete';  

    return this.http.request(method, url).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
    return `${API_CONFIG.IMAGE_URL}/${profilePicture}`;
  }
}
