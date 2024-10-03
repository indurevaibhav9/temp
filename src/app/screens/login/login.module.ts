import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { NgIconsModule } from "@ng-icons/core";
import { ionEye, ionEyeOff } from "@ng-icons/ionicons";
import { AlertPopupComponent } from "src/app/components/alert-popup/alert-popup.component";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { SharedModuleModule } from "src/app/shared/shared-module/shared-module.module";

@NgModule({
  declarations: [LoginComponent, AlertPopupComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ ionEye, ionEyeOff }),
    SharedModuleModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LoginModule {}
