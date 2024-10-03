import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSettingsComponent } from './components/main-settings/main-settings.component';
import { ProfileInformationComponent } from './components/profile-information/profile-information.component';
import { PasswordManagementComponent } from './components/password-management/password-management.component';

const routes: Routes = [
  { 
    path: '',
    component:MainSettingsComponent 
  },
  { 
    path: 'profile-information', 
    component:ProfileInformationComponent
  },
  { 
    path: 'password-management', 
    component:PasswordManagementComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
