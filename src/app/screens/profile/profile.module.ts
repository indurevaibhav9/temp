import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileRoutingModule } from './profile-routing.module';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { ConsumerProfileComponent } from './consumer-profile/consumer-profile.component';
import { SharedModule } from 'src/app/shared/shared-module/shared-module.module';

@NgModule({
  declarations: [
    BusinessProfileComponent,
    ConsumerProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class ProfileModule { }
