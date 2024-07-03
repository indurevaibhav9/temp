import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEventComponent } from './post-event.component';
import { PostEventRoutingModule } from './post-event-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PostEventComponent],
  imports: [
    CommonModule,
    PostEventRoutingModule,
    FontAwesomeModule
  ]
})
export class PostEventModule {}
