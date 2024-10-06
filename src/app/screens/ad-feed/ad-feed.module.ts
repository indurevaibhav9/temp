import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdFeedRoutingModule } from './ad-feed-routing.module';
import { AdFeedComponent } from './ad-feed.component';

import { OfferDescriptionComponent } from './offer-description/offer-description.component';
import { PostEventComponent } from './Event/Event.component';
import { PostWithImageComponent } from './Post/Post.component';
import { PostWithImageCouponComponent } from './Coupon/Coupon.component';
import { ReportPostComponent } from 'src/app/components/report-post/report-post.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AdFeedComponent,
    OfferDescriptionComponent,
    PostEventComponent,
    PostWithImageComponent,
    PostWithImageCouponComponent,
    ReportPostComponent
  
   
  ],
  imports: [
    CommonModule,
    AdFeedRoutingModule,
    FontAwesomeModule
  ]
})
export class AdFeedModule { }
