import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { BusinessModuleModule } from 'src/app/business-module/business-module.module';
import { ConsumerProfileComponent } from './consumer-profile/consumer-profile.component';

@NgModule({
  declarations: [
    BusinessProfileComponent,
    ConsumerProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    BusinessModuleModule
  ]
})
export class ProfileModule { }
