import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-screen-routing.module';
import { HomeScreenComponent } from './home-screen.component';
import { RouterModule, Routes } from '@angular/router';
import { BusinessHomeModule } from '../business-home/business-home.module';

@NgModule({
  declarations: [
    HomeScreenComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BusinessHomeModule
  ],
  exports: [
    HomeScreenComponent,
  ],
})
export class HomeModule { }
