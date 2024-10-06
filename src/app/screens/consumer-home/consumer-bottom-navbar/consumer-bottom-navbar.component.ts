import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faBell, faHome, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { ConsumerNavigationService } from 'src/app/services/consumer-navigation.service';

@Component({
  selector: 'app-consumer-bottom-navbar',
  templateUrl: './consumer-bottom-navbar.component.html',
  styles: []
})
export class ConsumerBottomNavbarComponent implements OnInit {

  faHome = faHome;
  faSearch = faSearch;
  faBell = faBell;
  faCircleUser = faCircleUser;

  Home_screen_active = false;
  Search_screen_active = false;
  Notification_screen_active = false;
  Profile_screen_active = false;

  constructor(private router: Router, private _navigation: ConsumerNavigationService) {}

  ngOnInit(): void {
    this.updateActiveStates();
    this.router.events.subscribe(() => {
      this.updateActiveStates();
    });
  }

  navigateTo(screen: string) {
    this.router.navigate([`/consumer-home/${screen.toLowerCase()}`]);
    this.updateActiveState(screen); 
  }

  private updateActiveStates() {
    const currentRoute = this.router.url.split('/').pop(); 
    this.resetActiveStates();

    if (currentRoute) {
      this.updateActiveState(currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1));
    }
  }

  private resetActiveStates() {
    this.Home_screen_active = false;
    this.Search_screen_active = false;
    this.Notification_screen_active = false;
    this.Profile_screen_active = false;

    this._navigation.Is_Home = false;
    this._navigation.Is_Search = false;
    this._navigation.Is_Notification = false;
    this._navigation.Is_Profile = false;
  }

  private updateActiveState(screen: string) {
    this.resetActiveStates(); 

    switch (screen.toLowerCase()) {
      case 'home':
        this.Home_screen_active = true;
        this._navigation.Is_Home = true;
        break;
      case 'search':
        this.Search_screen_active = true;
        this._navigation.Is_Search = true;
        break;
      case 'notification':
        this.Notification_screen_active = true;
        this._navigation.Is_Notification = true;
        break;
      case 'profile':
        this.Profile_screen_active = true;
        this._navigation.Is_Profile = true;
        break;
      default:
        break;
    }
  }

  isActive(screen: string): boolean {
    switch (screen.toLowerCase()) {
      case 'home':
        return this.Home_screen_active;
      case 'search':
        return this.Search_screen_active;
      case 'notification':
        return this.Notification_screen_active;
      case 'profile':
        return this.Profile_screen_active;
      default:
        return false;
    }
  }
}
