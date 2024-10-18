import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
