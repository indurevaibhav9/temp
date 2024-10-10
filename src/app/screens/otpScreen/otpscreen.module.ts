import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtpScreenRoutingModule } from './otpscreen-routing.module';
import { OtpscreenComponent } from './otpscreen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';



@NgModule({
  declarations: [
   OtpscreenComponent
    ],
  imports: [
    CommonModule,
    OtpScreenRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule
  ]
})
export class OtpScreenModule { }