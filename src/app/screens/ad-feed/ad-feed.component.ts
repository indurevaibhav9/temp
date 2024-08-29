import { Component } from '@angular/core';
import { faBars, faUserGroup, faMagnifyingGlass, faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ad-feed',
  templateUrl: './ad-feed.component.html',
  styleUrls: []
})
export class AdFeedComponent {
  faBars = faBars;
  faUserGroup = faUserGroup;
  faMagnifyingGlass = faMagnifyingGlass;
  faLocationDot = faLocationDot;
  faHeart = faHeart;
  faBell = faBell;
  faCircleUser = faCircleUser;

  viewOfferDescription() {
    window.location.href = '/offer-description'; // Update this URL to match your routing setup
  }
}
