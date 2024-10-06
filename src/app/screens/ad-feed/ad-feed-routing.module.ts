import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdFeedComponent } from './ad-feed.component';
import { OfferDescriptionComponent } from './offer-description/offer-description.component';
import { PostEventComponent } from './Event/Event.component';
import { PostWithImageComponent } from './Post/Post.component';
import { PostWithImageCouponComponent } from './Coupon/Coupon.component';

const routes: Routes = [
  { path: '', component: AdFeedComponent }, // Default route for AdFeed
  { path: 'offer-description', component: OfferDescriptionComponent }, // Route for OfferDescription
  { path: 'event', component: PostEventComponent },
  { path: 'post', component: PostWithImageComponent },
  {path:'coupon',component:PostWithImageCouponComponent}
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdFeedRoutingModule { }
