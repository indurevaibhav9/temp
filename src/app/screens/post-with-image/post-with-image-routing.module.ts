import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostWithImageComponent } from './post-with-image.component';

const routes: Routes = [
  { path: '', component: PostWithImageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostWithImageRoutingModule {}
