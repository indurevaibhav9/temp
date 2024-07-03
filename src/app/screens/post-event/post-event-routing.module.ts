import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEventComponent } from './post-event.component';

const routes: Routes = [
  { path: '', component: PostEventComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostEventRoutingModule {}
