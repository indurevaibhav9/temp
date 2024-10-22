import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationScreenComponent } from './notification-screen.component';


const routes: Routes = [
  {
    path: '',
    component : NotificationScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationScreenRoutingModule { }
