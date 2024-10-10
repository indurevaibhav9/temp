import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "src/environments/environment.development";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from "./screens/login/login.module";
import { LogoutModule } from "./screens/logout/logout.module";
import { GlobalErrorHandlerService } from "./services/global-error-handler.service";
import { BusinessHomeModule } from "./screens/business-home/business-home.module";
import { ConsumerHomeModule } from "./screens/consumer-home/consumer-home.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterModule } from "./screens/register/register.module";

<<<<<<< HEAD
>>>>>>> ff840b8 (Business and consumer navigation bar working)
=======
import { ConsumerHomeModule } from "./screens/consumer-home/consumer-home.module";
>>>>>>> bc8790b (Corrected Routes for consumer-home and business-home)

=======
>>>>>>> dd58006 (Renamed Home module to AdFeed module)
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    LoginModule,
    BusinessHomeModule,
    ConsumerHomeModule,
    ReactiveFormsModule,
    RegisterModule,
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
