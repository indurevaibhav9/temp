import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessInsightsRoutingModule } from './insights-routing.module';
import { BusinessInsightsComponent } from './insights.component';
import { BusinessHomeModule } from '../business-home/business-home.module';

@NgModule({
  declarations: [
    BusinessInsightsComponent
  ],
  imports: [
    CommonModule,
    BusinessInsightsRoutingModule,
    BusinessHomeModule
  ],
  exports: [
    BusinessInsightsComponent
  ],
})
export class BusinessInsightsModule { }
