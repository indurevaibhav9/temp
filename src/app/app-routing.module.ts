import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./screens/login/login.module").then(
        (module) => module.LoginModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./screens/home/home.module").then((module) => module.HomeModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./screens/register/register.module").then(
        (module) => module.RegisterModule
      ),
  },
  {
    path: "offer-description",
    loadChildren: () =>
      import("./screens/offer-description/offer-description.module").then(
        (module) => module.OfferDescriptionModule
      ),
  },
  {
    path: "post-event",
    loadChildren: () =>
      import("./screens/post-event/post-event.module").then(
        (module) => module.PostEventModule
      ),
  },
  {
    path: "post-with-image",
    loadChildren: () =>
      import("./screens/post-with-image/post-with-image.module").then(
        (module) => module.PostWithImageModule
      ),
  },
  {
    path: "post-with-image-coupon",
    loadChildren: () =>
      import("./screens/post-with-image-coupon/post-with-image-coupon.module").then(
        (module) => module.PostWithImageCouponModule
      ),
  },
  {
    path: "post-without-image-coupon",
    loadChildren: () =>
      import("./screens/post-without-image-coupon/post-without-image-coupon.module").then(
        (module) => module.PostWithoutImageCouponModule
      ),
  },
  // Add a wildcard route for a 404 page if needed
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
