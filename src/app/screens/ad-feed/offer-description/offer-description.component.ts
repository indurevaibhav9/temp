import { Component, OnInit } from '@angular/core';
import { OfferDescriptionService } from 'src/app/services/offer-description.service';
import { OfferDescriptionDTO } from 'src/app/models/offerdescriptionGet';
import { faBars, faUserGroup, faMagnifyingGlass, faThumbsUp, faThumbsDown, faLocationArrow, faBookmark, faEllipsisVertical, faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offer-description',
  templateUrl: './offer-description.component.html',
  styles: []
})
export class OfferDescriptionComponent implements OnInit {
  offerData: OfferDescriptionDTO;
  dropdowns: { [key: string]: boolean } = {
    howToAvail: false,
    termsConditions: false
  };

  // FontAwesome icons
  faBars = faBars;
  faUserGroup = faUserGroup;
  faMagnifyingGlass = faMagnifyingGlass;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faLocationArrow = faLocationArrow;
  faBookmark = faBookmark;
  faEllipsisVertical = faEllipsisVertical;
  faLocationDot = faLocationDot;
  faHeart = faHeart;
  faBell = faBell;
  faCircleUser = faCircleUser;

  constructor(private offerDescriptionService: OfferDescriptionService) {}

  ngOnInit(): void {
    this.offerDescriptionService.getOfferDescription().subscribe((data: OfferDescriptionDTO) => {
      this.offerData = data;
    });
  }

  viewOnWebsite(): void {
    window.location.href = 'https://www.example.com'; // Replace with your desired URL
  }

  toggleDropdown(key: string): void {
    this.dropdowns[key] = !this.dropdowns[key];
  }
}
