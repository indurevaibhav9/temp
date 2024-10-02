import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faAdd, faBell, faChartColumn, faChartLine, faCirclePlus, faCircleUser, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { BusinessNavigationServiceService } from 'src/app/services/business-navigation-service.service';

@Component({
  selector: 'app-business-bottom-navbar',
  templateUrl: './business-bottom-navbar.component.html',
  styles: []
})
export class BusinessBottomNavbarComponent {

  faHome = faHome;
  faAdd = faAdd;
  faBell = faBell;
  faUser = faUser;
  faChartLine = faChartLine;
  faCirclePlus = faCirclePlus;
  faChartColumn = faChartColumn;
  faCircleUser = faCircleUser;

  Home_screen_active = false;
  Insights_screen_active = false;
  Post_screen_active = false;
  Notification_screen_active = false;
  Profile_screen_active = false;

  constructor(private router: Router, private _navigation: BusinessNavigationServiceService) {
    this.Home_screen_active = this._navigation.Is_Home;
    this.Insights_screen_active = this._navigation.Is_Insights;
    this.Post_screen_active = this._navigation.Is_Post;
    this.Notification_screen_active = this._navigation.Is_Notification;
    this.Profile_screen_active = this._navigation.Is_Profile;
  }

  Home() {
    this.router.navigate(['/businessnavbar']);
    this.updateActiveState('Home');
  }

  Insights() {
    this.router.navigate(['/businessinsights']);
    this.updateActiveState('Insights');
  }

  Add_Post() {
    this.router.navigate(['/addpost']);
    this.updateActiveState('Post');
  }

  Notification() {
    this.router.navigate(['/notification']);
    this.updateActiveState('Notification');
  }

  Profile() {
    this.router.navigate(['/profile']);
    this.updateActiveState('Profile');
  }

  private resetActiveStates() {
    this.Home_screen_active = false;
    this.Insights_screen_active = false;
    this.Post_screen_active = false;
    this.Notification_screen_active = false;
    this.Profile_screen_active = false;
  }

  private updateActiveState(screen: string) {
    this.resetActiveStates(); 

    switch (screen) {
      case 'Home':
        this.Home_screen_active = true;
        this._navigation.Is_Home = true;
        break;
      case 'Insights':
        this.Insights_screen_active = true;
        this._navigation.Is_Insights = true;
        break;
      case 'Post':
        this.Post_screen_active = true;
        this._navigation.Is_Post = true;
        break;
      case 'Notification':
        this.Notification_screen_active = true;
        this._navigation.Is_Notification = true;
        break;
      case 'Profile':
        this.Profile_screen_active = true;
        this._navigation.Is_Profile = true;
        break;
    }
  }

  isActive(screen: string): boolean {
    switch (screen) {
      case 'Home':
        return this.Home_screen_active;
      case 'Insights':
        return this.Insights_screen_active;
      case 'Post':
        return this.Post_screen_active;
      case 'Notification':
        return this.Notification_screen_active;
      case 'Profile':
        return this.Profile_screen_active;
      default:
        return false;
    }
  }
}
