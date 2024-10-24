import { Component, Input, OnInit } from '@angular/core';
import { faBars, faUserGroup, faMagnifyingGlass, faThumbsUp, faThumbsDown, faLocationArrow, faBookmark, faEllipsisVertical, faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { AdvertisementDetailsService } from 'src/app/services/advertisementTypes.service';
import { BasePostComponent } from 'src/app/components/base-post/base-post.component';
import { Router } from '@angular/router';
import { AdvertisementDetails } from 'src/app/models/ad-details';

@Component({
  selector: 'app-Coupon',
  templateUrl: './Coupon.component.html',
  styles: []
})
export class CouponComponent implements OnInit {
  @Input() couponDetails!:AdvertisementDetails;

  remainingDays: number;
  isExpired: boolean = false;
  reportVisible: boolean = false; // Property to control visibility of report modal
  showReportButton: boolean = false;
 
  showLikeAnimation: boolean = false; 
  showDislikeAnimation: boolean = false;
  isSaved: boolean = false; // Track saved state
  showSavedMessage: boolean = false; // Track the display of "Saved" message
  copyButtonText: string = 'Copy';
  showReportSuccess: boolean = false; // Track visibility of success message


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

  constructor(private AdvertisementDetailsService: AdvertisementDetailsService,private router: Router) {}

  
  ngOnInit(): void {
    const expiryDate = new Date(this.couponDetails.offerExpiry);
    const currentDate = new Date();
    const timeDiff = expiryDate.getTime() - currentDate.getTime();
    this.remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (this.remainingDays <= 0) {
      this.isExpired = true;
    }
  }

  
  likePost(): AdvertisementDetails | null {
    const advertisementId = this.couponDetails.advertisementId;

    this.triggerAnimation('like');

    let updatedPost: AdvertisementDetails | null = null; // Variable to hold the updated post

    this.AdvertisementDetailsService.updateLikes(advertisementId, (response) => {
        updatedPost = response; // Store the updated post in the variable
        this.couponDetails.likes = updatedPost.likes; // Update the likes count
        console.log('Likes updated:', updatedPost.likes);
    });

    return updatedPost; // Return the updated post (will be null initially)
}

  dislikePost(): void {
    const advertisementId = this.couponDetails.advertisementId;

    this.triggerAnimation('dislike');

    this.AdvertisementDetailsService.updateDislikes(advertisementId, (updatedPost) => {
      this.couponDetails.dislikes = updatedPost.dislikes;
      console.log('DisLikes updated:', updatedPost.dislikes); 
    });
  }

  savePost(): void {
    const advertisementId = this.couponDetails.advertisementId;
    const username = this.couponDetails.username;
    this.triggerAnimation('save');
    // Show the saved message immediately
    this.showSavedMessage = true;

    // Hide the saved message after 2 seconds
    setTimeout(() => {
        this.showSavedMessage = false;
    }, 500); // Adjust the delay as needed

    // Call the savePost service (this can still be done in the background)
    this.AdvertisementDetailsService.savePost(username, advertisementId, (response) => {
        console.log('Post saved successfully:', response);
        this.isSaved = true;
    });
}
  
  

  toggleReportButton(): void {
    this.showReportButton = !this.showReportButton; // Toggle the visibility
  }

  reportPost(): void {
    // Logic to report the post can be added here, e.g., calling a service

    // Show the success message
    this.showReportSuccess = true;

    // Hide the report button after reporting
    this.showReportButton = false; // Hide the report button after reporting
    document.body.style.overflow = 'hidden';  
  }

  // New method to hide the success message
  hideReportSuccess(): void {
    this.showReportSuccess = false; // Hide the success message
    document.body.style.overflow = 'auto';  // Re-enable scrolling
  }


  private triggerAnimation(type: 'like' | 'dislike' | 'save') {
    if (type === 'like') {
      this.showLikeAnimation = true;
    } else if (type === 'dislike') {
      this.showDislikeAnimation = true;
    }
    setTimeout(() => {
      this.showLikeAnimation = false;
      this.showDislikeAnimation = false;
    }, 500); // 500 milliseconds for the animation
  }
  copyToClipboard(couponCode: string): void {
    navigator.clipboard.writeText(couponCode).then(() => {
      this.copyButtonText = 'Copied'; // Change button text to "Copied"
      setTimeout(() => {
        this.copyButtonText = 'Copy'; // Revert back to "Copy" after 2 seconds
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy coupon code:', err);
    });
  }
}
