import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessInsightsRoutingModule } from './insights-routing.module';
import { BusinessInsightsComponent } from './insights.component';
import { BusinessHomeModule } from '../business-home/business-home.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BusinessInsightsComponent }
];

@NgModule({
  declarations: [
    BusinessInsightsComponent
  ],
  imports: [
    CommonModule,
    BusinessInsightsRoutingModule,
    BusinessHomeModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    BusinessInsightsComponent
  ],
})
export class BusinessInsightsModule { }
