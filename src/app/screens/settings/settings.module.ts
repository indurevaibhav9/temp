import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { MainSettingsComponent } from './components/main-settings/main-settings.component';
import { PasswordManagementComponent } from './components/password-management/password-management.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { ImageComponentComponent } from './components/image-component/image-component.component';
import { BusinessInformationComponent } from './components/business-information/business-information.component';


@NgModule({
  declarations: [
    MainSettingsComponent,
    PasswordManagementComponent,
    UserInformationComponent,
    ImageComponentComponent,
    BusinessInformationComponent,
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
