import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { customerGuard } from "./authGuards/customer/customer.guard";
import { businessGuard } from "./authGuards/business/business.guard";
import { loginGuard } from "./authGuards/login/login.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "business-home",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () => import("./screens/login/login.module").then(m => m.LoginModule),
    // canActivate: [loginGuard]
  },
  { path: "register", loadChildren: () => import("./screens/register/register.module").then(m => m.RegisterModule) },

  {
    path: "business-home",
    loadChildren: () => import("./screens/business-home/business-home.module").then(m => m.BusinessHomeModule),
    // canActivate: [businessGuard]
  },
  {
    path: "otpscreen/:mobileNumber",
    loadChildren: () => import("./screens/otpScreen/otpscreen.module").then(m => m.OtpScreenModule),
  },
  {
    path: "homeBusiness",
    loadChildren: () =>
      import("./screens/home-screen/home-screen.module").then(
        (module) => module.HomeModule
      ),
  },
  {
    path: "feedback-screen",
    loadChildren: () =>
      import("./screens/feedback-screen/feedback-screen.module").then(
        (module) => module.FeedbackScreenModule
      ),
  },
  {
    path: "businessinsights",
    loadChildren: () =>
      import("./screens/insights/insights.module").then(
        (module) => module.BusinessInsightsModule
      ),
  },
  {
    path: "addpost",
    loadChildren: () =>
      import("./screens/add-post/add-post.module").then(
        (module) => module.AddPostModule
      ),
  },
  {
    path: "notification",
    loadChildren: () =>
      import("./screens/notification-screen/notification-screen.module").then(
        (module) => module.NotificationScreenModule
      ),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./screens/profile-screen/profile-screen.module").then(
        (module) => module.ProfileScreenModule
      ),
  },
  {
    path: "business-home",
    loadChildren: () =>
      import("./screens/business-home/business-home.module").then(
        (module) => module.BusinessHomeModule
      ),
  },
  {
    path: "consumer-home",
    loadChildren: () =>
      import("./screens/consumer-home/consumer-home.module").then(
        (module) => module.ConsumerHomeModule
      ),
  },
  { path: 'logout', loadChildren: () => import('./screens/logout/logout.module').then(m => m.LogoutModule) },
  {
    path: 'home',
    component: HomeScreenComponent 
  },
  { 
    path: 'insights',
    component: BusinessInsightsComponent
  },
  {
    path: 'addpost',
    component: AddPostComponent
  },
  {
    path: 'notification',
    component: NotificationScreenComponent
  },
  {
    path: 'profile',
    component: ProfileScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}