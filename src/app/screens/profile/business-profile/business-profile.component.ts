import { Component, Input, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business-profile.service';
import { faBars, faUserGroup, faMagnifyingGlass, faThumbsUp, faThumbsDown,faLocationArrow, faBookmark, faEllipsisVertical,faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { OfferDescriptionService } from 'src/app/services/offer-description.service'; // Adjust the path as needed
import { OfferDescriptionDTO } from 'src/app/models/offerdescriptionGet';
import { SavedPostsDTO } from 'src/app/models/savedPosts';
import { BusinessDetailsDTO } from 'src/app/models/BusinessDetails';
import { ProfilePostsDTO } from 'src/app/models/profilePosts';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})

export class BusinessProfileComponent implements OnInit {
  @Input() businessDetails!: BusinessDetailsDTO[];
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
  businesses: any[] = [];
  business: any;
  selectedTab: string = 'saved';
  username = 'tanvi247';
  isCopied: boolean = false;
  OfferDescriptionDTO: OfferDescriptionDTO;
  profilePosts: ProfilePostsDTO[] = [];
  savedPosts: SavedPostsDTO[] = [];

  constructor(private businessService: BusinessService, private offerDescriptionService: OfferDescriptionService) { }

  ngOnInit(): void {
    this.fetchBusinessDetails();
    this.fetchProfilePosts();
    this.fetchSavedPosts();

  //   this.businessService.getMain().subscribe(data => {
  //     this.businesses = data;
  //     this.business = this.businesses.find((business: any) => business.username === this.username);

  //     if (this.business) {
  //       console.log('Business found:', this.business);
  //       this.fetchSavedPosts();
  //     } else {
  //       console.error('Business not found for username:', this.username);
  //     }
  //   });
  // }

  // fetchSavedPosts(): void {
  //   this.businessService.getSaved().subscribe(savedData => {

  //     this.savedPosts = savedData.filter((post: any) => post.username === this.username);


  //     this.savedPosts.forEach(post => {
  //       if (!post.offerImageUrl && post.imageUrl) {
  //         post.offerImageUrl = post.imageUrl;
  //       }
  //     });

  //     if (this.savedPosts.length > 0) {
  //       console.log('Saved posts found for username:', this.username, this.savedPosts);
  //     } else {
  //       console.error('No saved posts found for username:', this.username);
  //     }
  //   });
  }

  // getBusinessDetails(): void {
  //   this.businessService.getBusinessDetails().subscribe(data => {
  //     this.business = data;
  //     console.log('Business Details:', this.business);
  //   });
  // }

  // copyCouponCode(code: string): void {
  //   navigator.clipboard.writeText(code).then(() => {
  //     this.isCopied = true;
  //     console.log('Coupon code copied to clipboard:', code);


  //     setTimeout(() => {
  //       this.isCopied = false;
  //     }, 2000);
  //   }).catch(err => {
  //     console.error('Failed to copy coupon code:', err);
  //   });
  // }


//   fetchBusinessDetails(): void {
//   this.businessService.getBusinessDetails().subscribe(
//     {
//       next:(response)=>{
//         //if there is no error and positive scenario
//         this.business=response;
//         console.log('Business Details:', response);
//       },
//       error:(error)=>{
//         console.log(error);
//     }
//   })
// }
  fetchBusinessDetails() {
    this.businessService.getBusinessDetails().subscribe(
      (data: BusinessDetailsDTO[]) => {
        this.business = data;
        console.log('Business Details:', this.business);
      }
    );
  }

  fetchProfilePosts() {
    this.businessService.getProfilePosts().subscribe(
      (data: ProfilePostsDTO[]) => {
        this.profilePosts = data;
        console.log('Profile Posts:', this.profilePosts);
      }
    );
  }

  fetchSavedPosts() {
    this.businessService.getSavedPosts().subscribe(
      (data: SavedPostsDTO[]) => {
        this.savedPosts = data;
        console.log('Saved Posts:', this.savedPosts);
      }
    );
  }

  switchTab(tab: string): void {
    this.selectedTab = tab;
  }
}
