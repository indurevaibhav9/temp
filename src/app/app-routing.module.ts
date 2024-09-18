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
