import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ThankYouPopupService } from 'src/app/services/thank-you-popup.service';

@Component({
  selector: 'app-thankyou-popup',
  templateUrl: './thankyou-popup.component.html',
  styleUrls: ['./thankyou-popup.component.css']
})
export class ThankyouPopupComponent{ 

  @Input() isVisible: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  onCloseClick() {
    this.close.emit();
  }
} 

