import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessBottomNavbarComponent } from './business-bottom-navbar/business-bottom-navbar.component';
import { BusinessTopNavbarComponent } from './business-top-navbar/business-top-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from '../home-screen/home-screen.component';
import { BusinessInsightsComponent } from '../insights/insights.component';
import { NotificationScreenComponent } from '../notification-screen/notification-screen.component';
import { AddPostComponent } from '../add-post/add-post.component';
import { ProfileScreenComponent } from '../profile-screen/profile-screen.component';
import { BusinessHomeComponent } from './business-home.component';

// Define routes
const routes: Routes = [
  {
    path: '',
    component: BusinessHomeComponent, // Main wrapper for business home
    children: [
      { path: 'home', component: HomeScreenComponent },
      { path: 'insights', component: BusinessInsightsComponent },
      { path: 'notifications', component: NotificationScreenComponent },
      { path: 'add-post', component: AddPostComponent },
      { path: 'profile', component: ProfileScreenComponent }
    ]
  }
];

@NgModule({
  declarations: [
    BusinessBottomNavbarComponent,
    BusinessTopNavbarComponent,
    BusinessHomeComponent // Declare the components used in this module
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(routes) // Register the routes for the business-home module
  ],
  exports: [
    BusinessBottomNavbarComponent,
    BusinessTopNavbarComponent
  ]
})
export class BusinessHomeModule { }
