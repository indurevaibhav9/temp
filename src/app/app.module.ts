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
<<<<<<< HEAD
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterModule } from "./screens/register/register.module";
import { SharedModuleModule } from "./shared/shared-module/shared.module";
=======
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from "./screens/login/login.component";
// import { ConsumerHomeModule } from "./screens/consumer-home/consumer-home.module";
import { BusinessHomeModule } from "./screens/business-home/business-home.module";

>>>>>>> 5f5312f (Applied changes from Feature/Navbar)
@NgModule({
  declarations: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    LoginModule,
<<<<<<< HEAD
<<<<<<< HEAD
    SharedModuleModule,
    ReactiveFormsModule,
    RegisterModule,
],
=======
    FontAwesomeModule
=======
    FontAwesomeModule,
    // ConsumerHomeModule,
    // BusinessHomeModule
  ],
  exports: [
    LoginComponent 
>>>>>>> 797e237 (improved folder and file structure, edited names of consumer and business navigation bars)
  ],
>>>>>>> 4c6615d (Added stashed changes)
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
    
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}