import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdFeedComponent } from './ad-feed.component';
import { OfferDescriptionComponent } from './offer-description/offer-description.component';
import { PostEventComponent } from './post-event/post-event.component';
import { PostWithImageComponent } from './post-with-image/post-with-image.component';
import { PostWithImageCouponComponent } from './post-with-image-coupon/post-with-image-coupon.component';
import { PostWithoutImageCouponComponent } from './post-without-image-coupon/post-without-image-coupon.component';

const routes: Routes = [
  { path: '', component: AdFeedComponent }, // Default route for AdFeed
  { path: 'offer-description', component: OfferDescriptionComponent }, // Route for OfferDescription
  { path: 'post-event', component: PostEventComponent },
  { path: 'post-with-image', component: PostWithImageComponent },
  { path: 'post-with-image-coupon', component: PostWithImageCouponComponent },
  { path: 'post-without-image-coupon', component: PostWithoutImageCouponComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdFeedRoutingModule { }
