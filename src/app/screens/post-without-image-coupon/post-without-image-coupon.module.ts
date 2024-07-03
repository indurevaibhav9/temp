import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostWithoutImageCouponRoutingModule } from './post-without-image-coupon-routing.module';
import { PostWithoutImageCouponComponent } from './post-without-image-coupon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [PostWithoutImageCouponComponent],
  imports: [
    CommonModule,
    PostWithoutImageCouponRoutingModule,
    FontAwesomeModule
  ]
})
export class PostWithoutImageCouponModule { }
