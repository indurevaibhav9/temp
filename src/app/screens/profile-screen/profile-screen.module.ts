import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileScreenRoutingModule } from './profile-screen-routing.module';
import { ProfileScreenComponent } from './profile-screen.component';
import { BusinessHomeModule } from '../business-home/business-home.module';
import { ConsumerHomeModule } from '../consumer-home/consumer-home.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared-module/shared-module.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProfileScreenComponent
  ],
  imports: [
    CommonModule,
    ProfileScreenRoutingModule,
    BusinessHomeModule,
    ConsumerHomeModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [ProfileScreenComponent]
})
export class ProfileScreenModule { }
