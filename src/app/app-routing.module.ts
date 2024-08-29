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
    path: "ad-feed",
    loadChildren: () =>
      import("./screens/ad-feed/ad-feed.module").then(
        (module) => module.AdFeedModule
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
