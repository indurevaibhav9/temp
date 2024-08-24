// thank-you-popup.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThankYouPopupService {
  private showPopupSubject = new Subject<boolean>();
  showPopup$ = this.showPopupSubject.asObservable();

  showPopup() {
    console.log('showPopup method called');
    this.showPopupSubject.next(true);
  }
}
