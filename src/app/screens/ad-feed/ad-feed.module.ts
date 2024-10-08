import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdFeedRoutingModule } from './ad-feed-routing.module';
import { AdFeedComponent } from './ad-feed.component';

import { OfferDescriptionComponent } from './offer-description/offer-description.component';
import { EventComponent } from './Event/Event.component';
import { PostComponent } from './Post/Post.component';
import { CouponComponent } from './Coupon/Coupon.component';
import { ReportPostComponent } from 'src/app/components/report-post/report-post.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AdFeedComponent,
    OfferDescriptionComponent,
    EventComponent,
    PostComponent,
    CouponComponent,
    ReportPostComponent
  
   
  ],
  imports: [
    CommonModule,
    AdFeedRoutingModule,
    FontAwesomeModule
  ]
})
export class AdFeedModule { }
