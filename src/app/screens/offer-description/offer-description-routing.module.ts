import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferDescriptionComponent } from './offer-description.component';

const routes: Routes = [
  {
    path: '',
    component: OfferDescriptionComponent,
    children: [
      {
        path: 'post-event',
        loadChildren: () =>
          import('../post-event/post-event.module').then(
            (module) => module.PostEventModule
          ),
      },
      {
        path: 'post-with-image',
        loadChildren: () =>
          import('../post-with-image/post-with-image.module').then(
            (module) => module.PostWithImageModule
          ),
      },
      {
        path: 'post-with-image-coupon',
        loadChildren: () =>
          import('../post-with-image-coupon/post-with-image-coupon.module').then(
            (module) => module.PostWithImageCouponModule
          ),
      },
      {
        path: 'post-without-image-coupon',
        loadChildren: () =>
          import('../post-without-image-coupon/post-without-image-coupon.module').then(
            (module) => module.PostWithoutImageCouponModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferDescriptionRoutingModule {}
