import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { customerGuard } from "./authGuards/customer/customer.guard";
import { otpScreenGuard } from "./authGuards/otpScreen/otp-screen.guard";
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
      import("./screens/otpscreen/otpscreen.module").then(
        (module) => module.OtpscreenModule
      ),
    // canActivate: [otpScreenGuard],
  },
  {
    path: "homeBusiness",
    loadChildren: () =>
      import("./screens/home/home.module").then(   // replace the path of business
        (module) => module.HomeModule
      ),
    canActivate: [businessGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}