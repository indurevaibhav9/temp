import { Component, Input, OnInit } from '@angular/core';
import { faBars, faUserGroup, faMagnifyingGlass, faThumbsUp, faThumbsDown, faLocationArrow, faBookmark, faEllipsisVertical, faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpOutline, faThumbsDown as faThumbsDownOutline } from '@fortawesome/free-regular-svg-icons'; // Import outlined icons
import { AdvertisementDetailsService } from 'src/app/services/advertisementTypes.service';
import { AdvertisementDetails } from 'src/app/models/ad-details';

@Component({
  selector: 'app-Coupon',
  templateUrl: './Coupon.component.html',
  styles: []
})
export class CouponComponent implements OnInit {
  @Input() couponDetails!: AdvertisementDetails;

  remainingDays: number;
  isExpired: boolean = false;
  reportVisible: boolean = false; // Property to control visibility of report modal
  showReportButton: boolean = false;
  remainingHours: number;

  showLikeAnimation: boolean = false;
  showDislikeAnimation: boolean = false;
  isSaved: boolean = false; // Track saved state
  showSavedMessage: boolean = false; // Track the display of "Saved" message
  copyButtonText: string = 'Copy';
  showReportSuccess: boolean = false; // Track visibility of success message

  // Font Awesome icons
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

  // Outlined icons
  faThumbsUpOutline = faThumbsUpOutline;
  faThumbsDownOutline = faThumbsDownOutline;

  // Track like/dislike state
  isLiked: boolean = false; // State for like
  isDisliked: boolean = false; // State for dislike

  constructor(private advertisementDetailsService: AdvertisementDetailsService) {}

  ngOnInit(): void {
    try {
      const { remainingDays, remainingHours, isExpired } = this.advertisementDetailsService.calculateExpiry(this.couponDetails.offerExpiry);
      this.remainingDays = remainingDays;
      this.remainingHours = remainingHours;
      this.isExpired = isExpired;
    } catch (error) {
      this.handleError(error);
    }
  }

  likePost(): void {
    const advertisementId = this.couponDetails.advertisementId;

    this.triggerAnimation('like');

    try {
      if (!this.isLiked) {
        this.isLiked = true; // Update like state
        this.isDisliked = false; // Reset dislike state
        this.couponDetails.likes += 1; // Increment likes immediately

        this.advertisementDetailsService.updateLikes(advertisementId, (updatedPost) => {
          this.couponDetails.likes = updatedPost.likes;
        });
      } else {
        // If already liked, you can choose to un-like
        this.isLiked = false;
        this.advertisementDetailsService.updateLikes(advertisementId, (updatedPost) => {
          this.couponDetails.likes = updatedPost.likes;
        });
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  dislikePost(): void {
    const advertisementId = this.couponDetails.advertisementId;

    this.triggerAnimation('dislike');

    try {
      if (!this.isDisliked) {
        this.isDisliked = true; // Update dislike state
        this.isLiked = false; // Reset like state
        this.couponDetails.dislikes += 1; // Increment dislikes immediately

        this.advertisementDetailsService.updateDislikes(advertisementId, (updatedPost) => {
          this.couponDetails.dislikes = updatedPost.dislikes;
        });
      } else {
        // If already disliked, you can choose to un-dislike
        this.isDisliked = false;
        this.advertisementDetailsService.updateDislikes(advertisementId, (updatedPost) => {
          this.couponDetails.dislikes = updatedPost.dislikes;
        });
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  savePost(): void {
    const advertisementId = this.couponDetails.advertisementId;
    const username = this.couponDetails.username;

    this.triggerAnimation('save');

    try {
      // Show the saved message immediately
      this.showSavedMessage = true;

      // Hide the saved message after 2 seconds
      setTimeout(() => {
        this.showSavedMessage = false;
      }, 500); // Adjust the delay as needed

      // Call the savePost service (this can still be done in the background)
      this.advertisementDetailsService.savePost(username, advertisementId, (response) => {
        console.log('Post saved successfully:', response);
        this.isSaved = true;
      });
    } catch (error) {
      this.handleError(error);
    }
  }

  toggleReportButton(): void {
    this.showReportButton = !this.showReportButton; // Toggle the visibility
  }

  reportPost(): void {
    try {
      // Logic to report the post can be added here, e.g., calling a service

      // Show the success message
      this.showReportSuccess = true;

      // Hide the report button after reporting
      this.showReportButton = false; // Hide the report button after reporting
      document.body.style.overflow = 'hidden';
    } catch (error) {
      this.handleError(error);
    }
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
      this.handleError(err); // Show error in popup
    });
  }

  private handleError(error: any): void {
    const message = error?.error?.message || 'An unexpected error occurred';
    alert(message); // Display error in a simple popup
  }
}
