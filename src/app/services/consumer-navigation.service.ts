import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumerNavigationService {
  constructor() { }
  
  Is_Home: boolean = true; 
  Is_Search: boolean = false;
  Is_Notification: boolean = false;
  Is_Profile: boolean = false;
}
