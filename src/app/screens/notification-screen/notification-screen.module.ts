import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationScreenRoutingModule } from './notification-screen-routing.module';
import { NotificationScreenComponent } from './notification-screen.component';
import { BusinessHomeModule } from '../business-home/business-home.module';


@NgModule({
  declarations: [
    NotificationScreenComponent
  ],
  imports: [
    CommonModule,
    NotificationScreenRoutingModule,
    BusinessHomeModule
  ],
  exports: [ 
    NotificationScreenComponent
  ]
})
export class NotificationScreenModule { }
