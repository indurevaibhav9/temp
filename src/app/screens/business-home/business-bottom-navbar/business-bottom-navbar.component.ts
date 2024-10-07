import { Component, OnInit } from '@angular/core';
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
export class BusinessBottomNavbarComponent implements OnInit {

  faHome = faHome; 
  faAdd = faAdd;
  faBell = faBell;
  faUser = faUser;
  faChartLine = faChartLine;
  faCirclePlus = faCirclePlus;
  faChartColumn = faChartColumn;
  faCircleUser = faCircleUser;

  adFeedScreenActive = false;  
  insightsScreenActive = false;
  postScreenActive = false;
  notificationScreenActive = false;
  profileScreenActive = false;

  constructor(private router: Router, private navigation: BusinessNavigationServiceService) {}

  ngOnInit(): void {
    this.updateActiveStates();
    this.router.events.subscribe(() => {
      this.updateActiveStates();
    });
  }

  navigateTo(screen: string) {
    this.router.navigate([`/business-home/${screen.toLowerCase()}`]);
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
    this.adFeedScreenActive = false;  
    this.insightsScreenActive = false;
    this.postScreenActive = false;
    this.notificationScreenActive = false;
    this.profileScreenActive = false;

    this.navigation.Is_AdFeed = false;  
    this.navigation.Is_Insights = false;
    this.navigation.Is_Post = false;
    this.navigation.Is_Notification = false;
    this.navigation.Is_Profile = false;
  }

  private updateActiveState(screen: string) {
    this.resetActiveStates(); 

    switch (screen.toLowerCase()) {
      case 'adfeed': 
        this.adFeedScreenActive = true;
        this.navigation.Is_AdFeed = true;  
        break;
      case 'insights':
        this.insightsScreenActive = true;
        this.navigation.Is_Insights = true;
        break;
      case 'addpost':
        this.postScreenActive = true;
        this.navigation.Is_Post = true;
        break;
      case 'notification':
        this.notificationScreenActive = true;
        this.navigation.Is_Notification = true;
        break;
      case 'profile':
        this.profileScreenActive = true;
        this.navigation.Is_Profile = true;
        break;
    }
  }

  isActive(screen: string): boolean {
    switch (screen.toLowerCase()) {
      case 'adfeed': 
        return this.adFeedScreenActive;  
      case 'insights':
        return this.insightsScreenActive;
      case 'addpost':
        return this.postScreenActive;
      case 'notification':
        return this.notificationScreenActive;
      case 'profile':
        return this.profileScreenActive;
      default:
        return false;
    }
  }
}
