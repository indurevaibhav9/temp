import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackScreenRoutingModule } from './feedback-screen-routing.module';
import { FeedbackScreenComponent } from './feedback-screen.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ThankyouPopupComponent } from 'src/app/components/thankyou-popup/thankyou-popup.component';




@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    FeedbackScreenRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class FeedbackScreenModule {}
