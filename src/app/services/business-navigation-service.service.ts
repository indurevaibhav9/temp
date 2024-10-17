import { Injectable } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { UserProfileDto } from '../models/UserProfileDTO';
=======
import { UserProfileDTO } from '../models/UserProfileDTO';
>>>>>>> c8b2c8c (Consumer and Business data is displayed through dummy data)
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
>>>>>>> 79946b6 (business-home working with docker integration)

@Injectable({
  providedIn: 'root'
})
export class BusinessNavigationServiceService {

  constructor() { }

  Is_AdFeed:boolean = true;
  Is_Insights:boolean = false;
  Is_Post:boolean = false;
  Is_Notification:boolean = false;
  Is_Profile:boolean = false;
<<<<<<< HEAD
}
=======

  getBusinessDetails(): Observable<UserProfileDTO[]> { 
    return this.http.get<UserProfileDTO[]>('https://dummyjson.com/c/98c2-5f66-47f6-9292', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }
}
>>>>>>> 79946b6 (business-home working with docker integration)
