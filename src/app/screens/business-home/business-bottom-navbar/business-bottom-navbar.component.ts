import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faAdd, faBell, faChartColumn, faChartLine, faCirclePlus, faCircleUser, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { BusinessNavigationServiceService } from 'src/app/services/business-navigation-service.service';

@Component({
  selector: 'app-business-bottom-navbar',
  templateUrl: './business-bottom-navbar.component.html',
  styles: [`
    .nav-icon {
      color: #FFFFFF; 
      font-size: 24px;
      transition: color 0.3s ease, transform 0.3s ease;
    }
    .nav-icon:hover, .active-icon {
      color: #007BFF; 
      transform: scale(1.2); 
    }

    .nav-icon-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px;
      transition: background-color 0.3s ease;
    }
    .nav-icon-container:hover {
      background-color: rgba(0, 123, 255, 0.1); 
      border-radius: 50%; 
    }
  `]
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
    this.router.navigate(['business-home/businessnavbar']);
    this.updateActiveState('home');
  }

  Insights() {
    this.router.navigate(['business-home/insights']);
    this.updateActiveState('insights');
  }

  Add_Post() {
    this.router.navigate(['business-home/addpost']);
    this.updateActiveState('addpost');
  }

  Notification() {
    this.router.navigate(['business-home/notification']);
    this.updateActiveState('notification');
  }

  Profile() {
    this.router.navigate(['business-home/profile']);
    this.updateActiveState('profile');
  }

  private updateActiveState(screen: string) {
    this.resetActiveStates();

    switch (screen) {
      case 'home':
        this.Home_screen_active = true;
        this._navigation.Is_Home = true;
        break;
      case 'insights':
        this.Insights_screen_active = true;
        this._navigation.Is_Insights = true;
        break;
      case 'addpost':
        this.Post_screen_active = true;
        this._navigation.Is_Post = true;
        break;
      case 'notification':
        this.Notification_screen_active = true;
        this._navigation.Is_Notification = true;
        break;
      case 'profile':
        this.Profile_screen_active = true;
        this._navigation.Is_Profile = true;
        break;
    }
  }

  private resetActiveStates() {
    this.Home_screen_active = false;
    this.Insights_screen_active = false;
    this.Post_screen_active = false;
    this.Notification_screen_active = false;
    this.Profile_screen_active = false;

    this._navigation.Is_Home = false;
    this._navigation.Is_Insights = false;
    this._navigation.Is_Post = false;
    this._navigation.Is_Notification = false;
    this._navigation.Is_Profile = false;
  }

  isActive(screen: string): boolean {
    switch (screen) {
      case 'home':
        return this.Home_screen_active;
      case 'insights':
        return this.Insights_screen_active;
      case 'addpost':
        return this.Post_screen_active;
      case 'notification':
        return this.Notification_screen_active;
      case 'profile':
        return this.Profile_screen_active;
      default:
        return false;
    }
  }
}
