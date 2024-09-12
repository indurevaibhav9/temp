import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private jsonUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getBusinesses(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
