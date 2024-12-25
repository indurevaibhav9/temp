import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "src/environments/environment.development";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from "./screens/login/login.module";
import { LogoutModule } from "./screens/logout/logout.module";
import { BusinessHomeModule } from "./screens/business-home/business-home.module";
import { ConsumerHomeModule } from "./screens/consumer-home/consumer-home.module";
import { ReactiveFormsModule } from "@angular/forms";
// import { RegisterModule } from "./screens/Registration/register/register.module";
import { WelcomeModule } from "./screens/welcome/welcome.module";
// import { ConsumerRegComponent } from './Registration/consumer-reg/consumer-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    // ConsumerRegComponent, // Removed Business1Component, Business2Component, and Business3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    LoginModule,
    LogoutModule,
    BusinessHomeModule,
    ConsumerHomeModule,
    ReactiveFormsModule,
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
