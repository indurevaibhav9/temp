import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from 'src/app/components/pop-up/pop-up.component';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { AdFeedModule } from 'src/app/screens/ad-feed/ad-feed.module';


@NgModule({
  declarations: [PopUpComponent, LoaderComponent],
  imports: [
    CommonModule,
    AdFeedModule
  ],
  exports: [PopUpComponent , LoaderComponent, AdFeedModule]
})
export class SharedModule { }
