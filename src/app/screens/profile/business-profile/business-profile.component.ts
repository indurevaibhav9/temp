import { Component, Input, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business-profile.service';
import { faBars, faList, faUserGroup, faMagnifyingGlass, faThumbsUp, faThumbsDown,faLocationArrow, faBookmark, faEllipsisVertical,faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { OfferDescriptionService } from 'src/app/services/offer-description.service';
import { OfferDescriptionDTO } from 'src/app/models/offerdescriptionGet';
import { BusinessDetails } from 'src/app/models/BusinessDetails';
import { AdvertisementDetails } from 'src/app/models/ad-details';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})

export class BusinessProfileComponent implements OnInit {
  @Input() businessDetails!: BusinessDetails[];
  @Input() profilePosts!: AdvertisementDetails[];
  @Input() savedPosts!: AdvertisementDetails[];
  faBars = faBars;
  faList = faList;
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
  businesses: any[] = [];
  business: any;
  selectedTab: string = 'posts';
  isCopied: boolean = false;
  OfferDescriptionDTO: OfferDescriptionDTO;
  ads: AdvertisementDetails []= [];

  constructor(private businessService: BusinessService, private offerDescriptionService: OfferDescriptionService) { }

  ngOnInit(): void {
    this.fetchBusinessDetails();
    this.fetchProfilePosts();
    this.fetchSavedPosts();
  }

  fetchBusinessDetails() {
    this.businessService.getBusinessDetails().subscribe((data: BusinessDetails[]) => {
      this.business = data;
      console.log('Business Details:', this.business);
    });
  }

  fetchProfilePosts() {
    this.businessService.getProfilePosts().subscribe((data: AdvertisementDetails[]) => {
      this.profilePosts = data;
      console.log('Profile Posts:', this.profilePosts);
    });
  }

  fetchSavedPosts() {
    this.businessService.getSavedPosts().subscribe((data: AdvertisementDetails[]) => {
      this.savedPosts = data;
      console.log('Saved Posts:', this.savedPosts);
    });
  }

  switchTab(tab: string): void {
    this.selectedTab = tab;
  }
}
