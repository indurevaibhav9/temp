import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { ConsumerProfileComponent } from './consumer-profile/consumer-profile.component';

const routes: Routes = [{ path: 'business', component: BusinessProfileComponent },{ path: 'consumer', component: ConsumerProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
