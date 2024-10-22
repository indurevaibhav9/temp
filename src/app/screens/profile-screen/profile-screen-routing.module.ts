import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileScreenComponent } from './profile-screen.component';


const routes: Routes = [
  {
    path: ':username',
    component : ProfileScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileScreenRoutingModule { }
