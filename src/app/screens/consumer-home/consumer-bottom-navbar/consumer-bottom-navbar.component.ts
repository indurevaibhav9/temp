import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faBell, faHome, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { ConsumerNavigationService } from 'src/app/services/consumer-navigation.service';

@Component({
  selector: 'app-consumer-bottom-navbar',
  templateUrl: './consumer-bottom-navbar.component.html',
  styles: []
})
export class ConsumerBottomNavbarComponent {

  faHome = faHome;
  faSearch = faSearch;
  faBell = faBell;
  faCircleUser = faCircleUser;

  Home_screen_active = false;
  Search_screen_active = false;
  Notification_screen_active = false;
  Profile_screen_active = false;

  constructor(private router: Router, private _navigation: ConsumerNavigationService) {
    this.Home_screen_active = this._navigation.Is_Home;
    this.Search_screen_active = this._navigation.Is_Search;
    this.Notification_screen_active = this._navigation.Is_Notification;
    this.Profile_screen_active = this._navigation.Is_Profile;
  }
  
  Home() {
    this.router.navigate(['/consumernavbar']);
    this.updateActiveState('Home');
  }

  Search() {
    this.router.navigate(['/search']);
    this.updateActiveState('Search');
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
    this.Search_screen_active = false;
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
      case 'Search':
        this.Search_screen_active = true;
        this._navigation.Is_Search = true;
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
      case 'Search':
        return this.Search_screen_active;
      case 'Notification':
        return this.Notification_screen_active;
      case 'Profile':
        return this.Profile_screen_active;
      default:
        return false;
    }
  }
}
