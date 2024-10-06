import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-screen-routing.module';
import { HomeScreenComponent } from './home-screen.component';
import { BusinessHomeModule } from '../business-home/business-home.module';
import { ConsumerHomeModule } from '../consumer-home/consumer-home.module';



@NgModule({
  declarations: [
    HomeScreenComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BusinessHomeModule,
    ConsumerHomeModule
  ],
  exports: [
    HomeScreenComponent,
  ],
})
export class HomeModule { }