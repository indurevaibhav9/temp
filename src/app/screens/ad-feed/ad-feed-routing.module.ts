import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdFeedComponent } from './ad-feed.component';
import { OfferDescriptionComponent } from './offer-description/offer-description.component';
import { EventComponent } from './Event/Event.component';
import { PostComponent } from './Post/Post.component';
import { CouponComponent } from './Coupon/Coupon.component';

const routes: Routes = [
  { path: '', component: AdFeedComponent }, // Default route for AdFeed
  { path: 'offer-description', component: OfferDescriptionComponent }, // Route for OfferDescription
  { path: 'event', component: EventComponent },
  { path: 'post', component: PostComponent },
  {path:'coupon',component:CouponComponent}
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdFeedRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdFeedComponent } from './ad-feed.component';

const routes: Routes = [
  {
    path: '',
    component: AdFeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdFeedRoutingModule  { }