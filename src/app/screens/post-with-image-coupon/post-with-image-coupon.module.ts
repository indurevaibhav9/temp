import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostWithImageCouponRoutingModule } from './post-with-image-coupon-routing.module';
import { PostWithImageCouponComponent } from './post-with-image-coupon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [PostWithImageCouponComponent],
  imports: [
    CommonModule,
    PostWithImageCouponRoutingModule,
    FontAwesomeModule
  ]
})
export class PostWithImageCouponModule { }





