import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgIconsModule } from "@ng-icons/core";
import { ionEye, ionEyeOff } from "@ng-icons/ionicons";
import { AlertPopupComponent } from "src/app/screens/alert-popup/alert-popup.component";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { BusinessHomeModule } from "../business-home/business-home.module";
import { SharedModule } from "src/app/shared/shared-module/shared-module.module";

@NgModule({
  declarations: [LoginComponent],
>>>>>>> 4c6615d (Added stashed changes)
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ ionEye, ionEyeOff }),
<<<<<<< HEAD
    SharedModuleModule,
    FontAwesomeModule  // Import FontAwesomeModule for <fa-icon>
=======
    BusinessModuleModule
>>>>>>> 4c6615d (Added stashed changes)
  ],
  schemas: [NO_ERRORS_SCHEMA],  // Use NO_ERRORS_SCHEMA for handling unknown components, only if needed
})
export class LoginModule {}
