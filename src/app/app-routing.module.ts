import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeScreenComponent } from "./screens/home-screen/home-screen.component";
import { BusinessInsightsComponent } from "./screens/insights/insights.component";
import { NotificationScreenComponent } from "./screens/notification-screen/notification-screen.component";
import { AddPostComponent } from "./screens/add-post/add-post.component";
import { ProfileScreenComponent } from "./screens/profile-screen/profile-screen.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "business-home",
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
      import("./screens/home-screen/home-screen.module").then(
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
  {
    path: "logout",
    loadChildren: () => import('./screens/logout/logout.module').then(m => m.LogoutModule)
  },
  { path: 'add-post', component: AddPostComponent },
  { path: 'insights', component: BusinessInsightsComponent },
  { path: 'notification', component: NotificationScreenComponent },
  { path: 'profile', component: ProfileScreenComponent },
  { path: '', redirectTo: 'business-home', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'business-home/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
