import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { customerGuard } from "./authGuards/customer/customer.guard";
import { businessGuard } from "./authGuards/business/business.guard";
import { loginGuard } from "./authGuards/login/login.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "discover-business-screen",
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
    path: "discover-business-screen",
    loadChildren: () =>
      import("./screens/discover-business-screen/discover-business-screen.module").then(
        (module) => module.DiscoverBusinessScreenModule
      ),
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
    path: "feedback-screen",
    loadChildren: () =>
      import("./screens/feedback-screen/feedback-screen.module").then(
        (module) => module.FeedbackScreenModule
      ),
  },
  { path: 'search', loadChildren: () => import('./screens/search/search.module').then(m => m.SearchModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}