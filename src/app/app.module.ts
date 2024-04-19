import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "src/environments/environment.development";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from "./screens/login/login.module";
import { GlobalErrorHandlerService } from "./services/global-error-handler.service";
import { OtpComponent } from './otp/otp.component';

@NgModule({
  declarations: [AppComponent, OtpComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    LoginModule,
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
