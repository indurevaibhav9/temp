import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "consumer-home/adfeed", pathMatch: "full" },

  { path: "login", loadChildren: () => import("./screens/login/login.module").then(m => m.LoginModule) },
  { path: "register", loadChildren: () => import("./screens/register/register.module").then(m => m.RegisterModule) },

  {
    path: "business-home",
    loadChildren: () => import("./screens/business-home/business-home.module").then(m => m.BusinessHomeModule),
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