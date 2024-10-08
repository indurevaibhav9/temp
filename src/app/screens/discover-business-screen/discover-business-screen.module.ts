import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DiscoverBusinessScreenRoutingModule } from './discover-business-screen-routing.module';
import { DiscoverBusinessScreenComponent } from './discover-business-screen.component';

@NgModule({
  declarations: [
    DiscoverBusinessScreenComponent
  ],
  imports: [
    CommonModule,
    DiscoverBusinessScreenRoutingModule,
    FontAwesomeModule
  ],
  exports: [ DiscoverBusinessScreenComponent]
})
export class DiscoverBusinessScreenModule {}