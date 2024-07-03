import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostWithImageComponent } from './post-with-image.component';
import { PostWithImageRoutingModule } from './post-with-image-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PostWithImageComponent],
  imports: [
    CommonModule,
    PostWithImageRoutingModule,
    FontAwesomeModule
  ]
})
export class PostWithImageModule {}
