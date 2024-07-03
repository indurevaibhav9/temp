import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferDescriptionComponent } from './offer-description.component';
import { OfferDescriptionRoutingModule } from './offer-description-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [OfferDescriptionComponent],
  imports: [
    CommonModule,
    OfferDescriptionRoutingModule,
    FontAwesomeModule
  ]
})
export class OfferDescriptionModule {}
