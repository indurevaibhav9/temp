import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPostRoutingModule } from './add-post-routing.module';
import { AddPostComponent } from './add-post.component';
import { ConsumerHomeModule } from '../consumer-home/consumer-home.module';
import { BusinessHomeModule } from '../business-home/business-home.module';

>>>>>>> 525abd9 (Added stashed changes)

@NgModule({
  declarations: [
    AddPostComponent
  ],
  imports: [
    CommonModule,
    AddPostRoutingModule
  ],
  exports: [AddPostComponent]
})
export class AddPostModule { }
