import { Component, Input, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business-profile.service';
import { faBars, faSpinner, faList, faUserGroup, faMagnifyingGlass, faThumbsUp, faThumbsDown, faLocationArrow, faBookmark, faEllipsisVertical, faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { OfferDescriptionService } from 'src/app/services/offer-description.service';
import { OfferDescriptionDTO } from 'src/app/models/offerdescriptionGet';
import { BusinessDetails } from 'src/app/models/BusinessDetails';
import { AdvertisementDetails } from 'src/app/models/ad-details';
import { DecodedToken } from 'src/app/models/decodedToken';
import { JwtDecoderService } from '../../../services/jwtDecoder/jwt-decoder.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})

export class BusinessProfileComponent implements OnInit {
  @Input() profilePosts!: AdvertisementDetails[];
  @Input() savedPosts!: AdvertisementDetails[];
  visibleProfilePosts: AdvertisementDetails[] = [];
  visibleSavedPosts: AdvertisementDetails[] = [];
  profilePostPage: number = 1;
  savedPostPage: number = 1;
  postsPerPage: number = 10;
  loadingProfilePosts: boolean = false;
  loadingSavedPosts: boolean = false;
  faSpinner = faSpinner;
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
  ads: AdvertisementDetails[] = [];
  currentUsername: string = ''; // default
  username: string | null = null;

  constructor(
    private businessService: BusinessService,
    private offerDescriptionService: OfferDescriptionService,
    private JwtDecoder: JwtDecoderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Fetch the dynamic username from the route
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
      if (this.username) {
        this.fetchBusinessDetails(this.username);
        this.fetchProfilePosts(this.username);
        this.fetchSavedPosts(this.username);
      }
    });
  }

  fetchCurrentUsername(): string {
    const token = localStorage.getItem('token') || '';
    const decodedToken: DecodedToken = this.JwtDecoder.decodeInfoFromToken(token);
    return decodedToken.sub;
  }

  fetchBusinessDetails(username: string) {
    this.businessService.getBusinessDetails(username).subscribe((data: BusinessDetails[]) => {
      this.business = data;
      console.log('Business Details:', this.business);
    });
  }

  fetchProfilePosts(username: string) {
    this.loadingProfilePosts = true;
    this.businessService.getProfilePosts(username).subscribe((data: AdvertisementDetails[]) => {
      this.profilePosts = data;
      console.log('Profile Posts:', this.profilePosts);
      this.visibleProfilePosts = this.profilePosts.slice(0, this.postsPerPage);
      this.loadingProfilePosts = false;
    });
  }

  fetchSavedPosts(username: string) {
    this.loadingSavedPosts = true;
    this.businessService.getSavedPosts(username).subscribe((data: AdvertisementDetails[]) => {
      this.savedPosts = data;
      console.log('Saved Posts:', this.savedPosts);
      this.visibleSavedPosts = this.savedPosts.slice(0, this.postsPerPage);
      this.loadingSavedPosts = false;
    });
  }

  switchTab(tab: string): void {
    this.selectedTab = tab;

    // Reset scroll position on tab switch
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }

  onScroll(event: any) {
    const scrollContainer = event.target;
    const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
    const scrollHeight = scrollContainer.scrollHeight;

    // Check if the user has scrolled near the bottom (e.g., within 100px)
    if (scrollPosition >= scrollHeight - 100) {
      if (this.selectedTab === 'posts' && !this.loadingProfilePosts) {
        this.loadMoreProfilePosts();
      } else if (this.selectedTab === 'saved' && !this.loadingSavedPosts) {
        this.loadMoreSavedPosts();
      }
    }
  }

  loadMoreProfilePosts() {
    const nextPageStartIndex = this.profilePostPage * this.postsPerPage;
    const nextPageEndIndex = nextPageStartIndex + this.postsPerPage;

    if (nextPageStartIndex < this.profilePosts.length) {
      this.loadingProfilePosts = true; // Show spinner
      setTimeout(() => {
        this.visibleProfilePosts.push(...this.profilePosts.slice(nextPageStartIndex, nextPageEndIndex));
        this.profilePostPage++;
        this.loadingProfilePosts = false; // Hide spinner
      }, 1000); // Simulate network delay
    }
  }

  loadMoreSavedPosts() {
    const nextPageStartIndex = this.savedPostPage * this.postsPerPage;
    const nextPageEndIndex = nextPageStartIndex + this.postsPerPage;

    if (nextPageStartIndex < this.savedPosts.length) {
      this.loadingSavedPosts = true; // Show spinner
      setTimeout(() => {
        this.visibleSavedPosts.push(...this.savedPosts.slice(nextPageStartIndex, nextPageEndIndex));
        this.savedPostPage++;
        this.loadingSavedPosts = false; // Hide spinner
      }, 1000); // Simulate network delay
    }
  }

  isExpired(offerExpiry: string): boolean {
    const expiryDate = new Date(offerExpiry);
    const currentDate = new Date();
    return expiryDate < currentDate;
  }
}
