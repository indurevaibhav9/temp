import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgIconsModule } from "@ng-icons/core";
import { ionEye, ionEyeOff } from "@ng-icons/ionicons";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { LoaderComponent } from "src/app/components/loader/loader.component";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ ionEye, ionEyeOff }),
    LoaderComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LoginModule {}
