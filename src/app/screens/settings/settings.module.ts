import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { MainSettingsComponent } from './components/main-settings/main-settings.component';
import { ProfileInformationComponent } from './components/profile-information/profile-information.component';
import { PasswordManagementComponent } from './components/password-management/password-management.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';


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
    RouterModule,
    SharedModuleModule
  ]
})
export class SettingsModule { }
