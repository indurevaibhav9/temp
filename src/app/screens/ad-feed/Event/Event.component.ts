// src/app/components/post-event/post-event.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { faBars, faUserGroup, faMagnifyingGlass, faThumbsUp, faThumbsDown, faLocationArrow, faBookmark, faEllipsisVertical, faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpOutline, faThumbsDown as faThumbsDownOutline } from '@fortawesome/free-regular-svg-icons'; // Import outlined icons
import { AdvertisementDetailsService } from 'src/app/services/advertisementTypes.service';
import { AdvertisementDetails } from 'src/app/models/ad-details';
@Component({
  selector: 'app-Event',
  templateUrl: './Event.component.html',
  styleUrls: [] // Add if you have a CSS file
})
export class EventComponent implements OnInit {
  @Input() eventDetails!:AdvertisementDetails;

  remainingDays: number;
  remainingHours: number;
  isExpired: boolean = false;
  reportVisible: boolean = false; // Property to control visibility of report modal
  showReportButton: boolean = false;
  showReportSuccess: boolean = false; 
  showLikeAnimation: boolean = false; 
  showDislikeAnimation: boolean = false;
  isSaved: boolean = false; // Track saved state
  showSavedMessage: boolean = false; // Track the display of "Saved" message
  


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
  faThumbsUpOutline = faThumbsUpOutline;
  faThumbsDownOutline = faThumbsDownOutline;

  // Track like/dislike state
  isLiked: boolean = false; // State for like
  isDisliked: boolean = false; // State for dislike

  constructor(private AdvertisementDetailsService: AdvertisementDetailsService) {}

  
  ngOnInit(): void {
    const { remainingDays, remainingHours, isExpired } = this.AdvertisementDetailsService.calculateExpiry(this.eventDetails.offerExpiry);
    this.remainingDays = remainingDays;
    this.remainingHours = remainingHours;
    this.isExpired = isExpired;
  }

  likePost(): void {
    const advertisementId = this.eventDetails.advertisementId;

    this.triggerAnimation('like');

    if (!this.isLiked) {
      this.isLiked = true; // Update like state
      this.isDisliked = false; // Reset dislike state
      this.eventDetails.likes += 1; // Increment likes immediatel

      this.AdvertisementDetailsService.updateLikes(advertisementId, (updatedPost) => {
        this.eventDetails.likes = updatedPost.likes;
      });
    } else {
      // If already liked, you can choose to un-like
      this.isLiked = false;
      this.AdvertisementDetailsService.updateLikes(advertisementId, (updatedPost) => {
        this.eventDetails.likes = updatedPost.likes;
      });
    }
  }

  dislikePost(): void {
    const advertisementId = this.eventDetails.advertisementId;

    this.triggerAnimation('dislike');

    if (!this.isDisliked) {
      this.isDisliked = true; // Update dislike state
      this.isLiked = false; // Reset like state
      this.eventDetails.dislikes += 1; // Increment dislikes immediately

      this.AdvertisementDetailsService.updateDislikes(advertisementId, (updatedPost) => {
        this.eventDetails.dislikes = updatedPost.dislikes;
      });
    } else {
      // If already disliked, you can choose to un-dislike
      this.isDisliked = false;
      this.AdvertisementDetailsService.updateDislikes(advertisementId, (updatedPost) => {
        this.eventDetails.dislikes = updatedPost.dislikes;
      });
    }
  }

  savePost(): void {
    const advertisementId = this.eventDetails.advertisementId;
    const username = this.eventDetails.username;

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
  
  
  bookNow(): void {
    // Replace the URL with the website you want to redirect to
    window.location.href = 'https://www.example.com';
  }


}
