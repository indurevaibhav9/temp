import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "src/environments/environment.development";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from "./screens/login/login.module";
import { ReactiveFormsModule } from "@angular/forms";
import { OtpscreenComponent } from "./screens/otpscreen/otpscreen.component";
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [AppComponent, OtpscreenComponent], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    LoginModule,
    ReactiveFormsModule ,
    LoaderComponent
  ],
  providers: [
    {
      provide: ErrorHandler,
      // useClass: GlobalErrorHandlerService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
