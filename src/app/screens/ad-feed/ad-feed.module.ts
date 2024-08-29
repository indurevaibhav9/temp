import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdFeedRoutingModule } from './ad-feed-routing.module';
import { AdFeedComponent } from './ad-feed.component';

import { OfferDescriptionComponent } from './offer-description/offer-description.component';
import { PostEventComponent } from './post-event/post-event.component';
import { PostWithImageComponent } from './post-with-image/post-with-image.component';
import { PostWithImageCouponComponent } from './post-with-image-coupon/post-with-image-coupon.component';
import { PostWithoutImageCouponComponent } from './post-without-image-coupon/post-without-image-coupon.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AdFeedComponent,
    OfferDescriptionComponent,
    PostEventComponent,
    PostWithImageComponent,
    PostWithImageCouponComponent,
    PostWithoutImageCouponComponent
  ],
  imports: [
    CommonModule,
    AdFeedRoutingModule,
    FontAwesomeModule
  ]
})
export class AdFeedModule { }
