import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "src/environments/environment.development";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from "./screens/login/login.module";
import { GlobalErrorHandlerService } from "./services/global-error-handler.service";
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterModule } from "./screens/register/register.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from "./shared/shared-module/shared-module.module";

@NgModule({
  declarations: [
    AppComponent,  // No ProfileInfoComponent here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    LoginModule,
    ReactiveFormsModule,
    RegisterModule,
    FontAwesomeModule,
    SharedModule // Import SharedModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
