import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { MainSettingsComponent } from './components/main-settings/main-settings.component';
import { ProfileInformationComponent } from './components/profile-information/profile-information.component';
import { PasswordManagementComponent } from './components/password-management/password-management.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainSettingsComponent,
    ProfileInformationComponent,
    PasswordManagementComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SettingsModule { }
