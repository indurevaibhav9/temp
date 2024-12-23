import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'business-home',
    loadChildren: () => import('./screens/business-home/business-home.module').then(m => m.BusinessHomeModule),
  },
  {
    path: 'otpscreen/:mobileNumber',
    loadChildren: () => import('./screens/otpScreen/otpscreen.module').then(m => m.OtpScreenModule),
  },
  {
    path: 'consumer-home',
    loadChildren: () => import('./screens/consumer-home/consumer-home.module').then(m => m.ConsumerHomeModule),
  },
  {
    path: 'welcome',
    loadChildren: () => import('./screens/welcome/welcome.module').then(m => m.WelcomeModule),
  },
  {
    path: 'business1',
    loadChildren: () => import('./screens/Registration/BusinessRegistration/businessRegistration.module').then(m => m.BusinessRegistrationModule),  // Updated path here
  },
  { path: '**', redirectTo: 'consumer-home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
