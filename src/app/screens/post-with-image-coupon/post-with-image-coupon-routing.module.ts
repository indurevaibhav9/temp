import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostWithImageCouponComponent } from './post-with-image-coupon.component';

const routes: Routes = [
  { path: '', component: PostWithImageCouponComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostWithImageCouponRoutingModule {}
