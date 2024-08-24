import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "src/environments/environment.development";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from "./screens/login/login.module";
import { GlobalErrorHandlerService } from "./services/global-error-handler.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ThankYouPopupService } from "./services/thank-you-popup.service";
import { ThankyouPopupComponent } from "./components/thankyou-popup/thankyou-popup.component";
import { FeedbackScreenComponent } from "./screens/feedback-screen/feedback-screen.component";
import { PopUpComponent } from './screens/pop-up/pop-up.component';



@NgModule({
  declarations: [AppComponent, ThankyouPopupComponent, FeedbackScreenComponent, PopUpComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    LoginModule,
    FontAwesomeModule,
    ReactiveFormsModule
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
