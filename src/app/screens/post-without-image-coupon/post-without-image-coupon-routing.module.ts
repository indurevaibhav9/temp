import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostWithoutImageCouponComponent } from './post-without-image-coupon.component';

const routes: Routes = [
  { path: '', component: PostWithoutImageCouponComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostWithoutImageCouponRoutingModule {}
