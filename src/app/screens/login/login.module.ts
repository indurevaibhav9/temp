import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgIconsModule } from "@ng-icons/core";
import { ionEye, ionEyeOff } from "@ng-icons/ionicons";
import { AlertPopupComponent } from "src/app/screens/alert-popup/alert-popup.component";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { SharedModuleModule } from "src/app/shared/shared-module/shared.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  // Ensure FontAwesomeModule is imported

@NgModule({
  declarations: [LoginComponent, AlertPopupComponent],  // LoginComponent only declared here, not in LoginRoutingModule
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ ionEye, ionEyeOff }),
    SharedModuleModule,
    FontAwesomeModule  // Import FontAwesomeModule for <fa-icon>
  ],
  schemas: [NO_ERRORS_SCHEMA],  // Use NO_ERRORS_SCHEMA for handling unknown components, only if needed
})
export class LoginModule {}
