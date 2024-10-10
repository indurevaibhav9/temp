import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { customerGuard } from "./authGuards/customer/customer.guard";
import { businessGuard } from "./authGuards/business/business.guard";
import { loginGuard } from "./authGuards/login/login.guard";

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
      canActivate:[loginGuard]
  },
  {
    path: "homeCustomer",
    loadChildren: () =>
      import("./screens/home/home.module").then((module) => module.HomeModule), // replace the path of customer
    canActivate: [customerGuard],
  },
  {
    path: "otpscreen/:mobileNumber",
    loadChildren: () =>
      import("./screens/otpScreen/otpscreen.module").then(
        (module) => module.OtpScreenModule
      ),
  },
  {
    path: "homeBusiness",
    loadChildren: () =>
      import("./screens/home/home.module").then(   // replace the path of business
        (module) => module.HomeModule
      ),
    canActivate: [businessGuard],
  },
  {
    path: "ad-feed",
    loadChildren: () =>
      import("./screens/ad-feed/ad-feed.module").then(
        (module) => module.AdFeedModule
      ),
  },
  {
    path: "feedback-screen",
    loadChildren: () =>
      import("./screens/feedback-screen/feedback-screen.module").then(
        (module) => module.FeedbackScreenModule
      ),
  },
  // Add a wildcard route for a 404 page if needed
  { path: '**', redirectTo: 'login' },
  {
    path: 'profile',
    loadChildren: () =>
      import('./screens/profile/profile.module').then(
        (module) => module.ProfileModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}