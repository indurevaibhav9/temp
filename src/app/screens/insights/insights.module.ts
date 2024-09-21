import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessInsightsRoutingModule } from './insights-routing.module';
import { BusinessInsightsComponent } from './insights.component';
import { BusinessHomeModule } from '../business-home/business-home.module';
import { BusinessBottomNavbarComponent } from '../business-home/business-bottom-navbar/business-bottom-navbar.component';
import { BusinessTopNavbarComponent } from '../business-home/business-top-navbar/business-top-navbar.component';

@NgModule({
  declarations: [
    BusinessInsightsComponent
  ],
  imports: [
    CommonModule,
    BusinessInsightsRoutingModule,
  ],
  exports: [
    BusinessInsightsComponent
  ],
})
export class BusinessInsightsModule { }
