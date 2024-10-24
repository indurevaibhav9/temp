// src/app/components/post-event/post-event.component.ts
import { Component,Input, OnInit } from '@angular/core';
import { faBars, faUserGroup, faMagnifyingGlass, faThumbsUp, faThumbsDown, faLocationArrow, faBookmark, faEllipsisVertical, faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { AdvertisementDetailsService } from 'src/app/services/advertisementTypes.service'; // Adjust the path as needed
import { OfferDescriptionDTO } from 'src/app/models/offerdescriptionGet';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AdvertisementDetails } from 'src/app/models/ad-details';
@Component({
  selector: 'app-Event',
  templateUrl: './Event.component.html',
  styleUrls: [] // Add if you have a CSS file
})
export class EventComponent implements OnInit {
  @Input() eventDetails!:AdvertisementDetails;

  remainingDays: number;
  isExpired: boolean = false;
  reportVisible: boolean = false; // Property to control visibility of report modal
  showReportButton: boolean = false;
 
  showLikeAnimation: boolean = false; 
  showDislikeAnimation: boolean = false;
  isSaved: boolean = false; // Track saved state
  showSavedMessage: boolean = false; // Track the display of "Saved" message
 
  showReportSuccess: boolean = false; // Track visibility of success message


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
  faArrowRight = faArrowRight; // Declare the icon here

  constructor(private AdvertisementDetailsService: AdvertisementDetailsService,private router: Router) {}

  
  ngOnInit(): void {
    const expiryDate = new Date(this.eventDetails.offerExpiry);
    const currentDate = new Date();
    const timeDiff = expiryDate.getTime() - currentDate.getTime();
    this.remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (this.remainingDays <= 0) {
      this.isExpired = true;
    }
  }

  likePost(): void {
    const advertisementId = this.eventDetails.advertisementId;

    this.triggerAnimation('like');

    this.AdvertisementDetailsService.updateLikes(advertisementId, (updatedPost) => {
      this.eventDetails.likes = updatedPost.likes;
    });
  }

  dislikePost(): void {
    const advertisementId = this.eventDetails.advertisementId;

    this.triggerAnimation('dislike');

    this.AdvertisementDetailsService.updateDislikes(advertisementId, (updatedPost) => {
      this.eventDetails.dislikes = updatedPost.dislikes;
    });
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
