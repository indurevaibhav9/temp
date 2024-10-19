import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from 'src/app/components/pop-up/pop-up.component';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { SearchModule } from 'src/app/screens/search/search.module';

@NgModule({
  declarations: [PopUpComponent, LoaderComponent],
  imports: [
    CommonModule,
    SearchModule
  ],
  exports: [PopUpComponent , LoaderComponent, SearchModule]
})
export class SharedModule { }
