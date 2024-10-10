import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { customerGuard } from "./authGuards/customer/customer.guard";
import { businessGuard } from "./authGuards/business/business.guard";
import { loginGuard } from "./authGuards/login/login.guard";

const routes: Routes = [
  { path: "", redirectTo: "consumer-home/adfeed", pathMatch: "full" },

  { path: "login", loadChildren: () => import("./screens/login/login.module").then(m => m.LoginModule) },
  { path: "register", loadChildren: () => import("./screens/register/register.module").then(m => m.RegisterModule) },

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
    path: "business-home",
    loadChildren: () => import("./screens/business-home/business-home.module").then(m => m.BusinessHomeModule),
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
    path: "consumer-home",
    loadChildren: () => import("./screens/consumer-home/consumer-home.module").then(m => m.ConsumerHomeModule),
  },

  { path: "**", redirectTo: "consumer-home/adfeed" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}