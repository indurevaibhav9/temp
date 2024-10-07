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
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterModule } from "./screens/register/register.module";
import { SharedModuleModule } from "./shared/shared-module/shared.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BusinessHomeModule } from "./screens/business-home/business-home.module";
import { AddPostModule } from "./screens/add-post/add-post.module";
import { NotificationScreenModule } from "./screens/notification-screen/notification-screen.module";
import { ProfileScreenModule } from "./screens/profile-screen/profile-screen.module";
import { ConsumerHomeModule } from "./screens/consumer-home/consumer-home.module";
import { SearchModule } from "./screens/search/search.module";

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
    SharedModuleModule,
    ReactiveFormsModule,
    RegisterModule,
    FontAwesomeModule,
    AddPostModule,
    NotificationScreenModule,
    ProfileScreenModule,
    SearchModule,
    ConsumerHomeModule,
    BusinessHomeModule
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