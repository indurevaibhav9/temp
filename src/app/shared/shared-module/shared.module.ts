import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from 'src/app/components/pop-up/pop-up.component';
import { FeedbackScreenComponent } from 'src/app/screens/feedback-screen/feedback-screen.component';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  // Ensure FontAwesomeModule is imported

@NgModule({
  declarations: [
    PopUpComponent,
    FeedbackScreenComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    FeedbackScreenComponent,
    PopUpComponent,
    LoaderComponent
  ]
})
export class SharedModuleModule {}
