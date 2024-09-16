import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPostRoutingModule } from './add-post-routing.module';
import { AddPostComponent } from './add-post.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { BusinessModuleModule } from "src/app/business-module/business-module.module";

>>>>>>> 525abd9 (Added stashed changes)

@NgModule({
  declarations: [
    AddPostComponent
  ],
  imports: [
    CommonModule,
    AddPostRoutingModule,
<<<<<<< HEAD
    BusinessHomeModule,
    RouterModule.forChild(routes)
  ],
  exports: [AddPostComponent]
=======
    BusinessModuleModule
  ]
>>>>>>> 525abd9 (Added stashed changes)
})
export class AddPostModule { }
