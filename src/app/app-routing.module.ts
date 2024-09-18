import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsumerBottomNavbarComponent } from "./screens/consumer-navbar/consumer-bottom-navbar/consumer-bottom-navbar.component";
import { ConsumerTopNavbarComponent } from "./screens/consumer-navbar/consumer-top-navbar/consumer-top-navbar.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "businessnavbar",
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
      import("./screens/home/home.module").then(
        (module) => module.HomeModule
      ),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./screens/register/register.module").then(
        (module) => module.RegisterModule
      ),
  },
  {
    path: "businessinsights",
    loadChildren: () =>
      import("./screens/business-insights/business-insights.module").then(
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
    path: "businessnavbar",
    loadChildren: () =>
      import("./screens/business-navbar/business-navbar.module").then(
        (module) => module.BusinessNavbarModule
      ),
  },
  {
    path: "consumernavbar",
    loadChildren: () =>
      import("./screens/consumer-navbar/consumer-navbar.module").then(
        (module) => module.ConsumerNavbarModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
