import { Component, Input, OnInit } from '@angular/core';
import { faBars, faUserGroup, faMagnifyingGlass, faThumbsUp, faThumbsDown, faLocationArrow, faBookmark, faEllipsisVertical, faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpOutline, faThumbsDown as faThumbsDownOutline } from '@fortawesome/free-regular-svg-icons'; // Import outlined icons
import { AdvertisementDetailsService } from 'src/app/services/advertisementTypes.service';
import { AdvertisementDetails } from 'src/app/models/ad-details';

@Component({
  selector: 'app-Post',
  templateUrl: './Post.component.html',
  styles: []
})
export class PostComponent implements OnInit {
  @Input() postDetails!: AdvertisementDetails;
  remainingDays: number;
  remainingHours: number;
  isExpired: boolean = false;
  showLikeAnimation: boolean = false; 
  showDislikeAnimation: boolean = false;
  isSaved: boolean = false; // Track saved state
  showSavedMessage: boolean = false; // Track the display of "Saved" message
  showReportButton: boolean = false; // Track visibility of report button
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

  constructor(private AdvertisementDetailsService: AdvertisementDetailsService) {}

  ngOnInit(): void {
    this.calculateExpiry();
  }
  
  calculateExpiry(): void {
    const expiryDate = new Date(this.postDetails.offerExpiry);
    const currentDate = new Date();
    const timeDiff = expiryDate.getTime() - currentDate.getTime();
    
    // Calculate remaining days
    this.remainingDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    // Calculate remaining hours
    this.remainingHours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
    
    // Determine if the offer has expired
    this.isExpired = this.remainingDays < 0 || (this.remainingDays === 0 && this.remainingHours <= 0);
  }

  likePost(): void {
    const advertisementId = this.postDetails.advertisementId;

    this.triggerAnimation('like');

    if (!this.isLiked) {
      this.isLiked = true; // Update like state
      this.isDisliked = false; // Reset dislike state
      this.postDetails.likes += 1; // Increment likes immediatel

      this.AdvertisementDetailsService.updateLikes(advertisementId, (updatedPost) => {
        this.postDetails.likes = updatedPost.likes;
      });
    } else {
      // If already liked, you can choose to un-like
      this.isLiked = false;
      this.AdvertisementDetailsService.updateLikes(advertisementId, (updatedPost) => {
        this.postDetails.likes = updatedPost.likes;
      });
    }
  }

  dislikePost(): void {
    const advertisementId = this.postDetails.advertisementId;

    this.triggerAnimation('dislike');

    if (!this.isDisliked) {
      this.isDisliked = true; // Update dislike state
      this.isLiked = false; // Reset like state
      this.postDetails.dislikes += 1; // Increment dislikes immediately

      this.AdvertisementDetailsService.updateDislikes(advertisementId, (updatedPost) => {
        this.postDetails.dislikes = updatedPost.dislikes;
      });
    } else {
      // If already disliked, you can choose to un-dislike
      this.isDisliked = false;
      this.AdvertisementDetailsService.updateDislikes(advertisementId, (updatedPost) => {
        this.postDetails.dislikes = updatedPost.dislikes;
      });
    }
  }

  savePost(): void {
    const advertisementId = this.postDetails.advertisementId;
    const username = this.postDetails.username;
    this.triggerAnimation('save');
    
    this.showSavedMessage = true;

    setTimeout(() => {
        this.showSavedMessage = false;
    }, 500); 

    this.AdvertisementDetailsService.savePost(username, advertisementId, (response) => {
        console.log('Post saved successfully:', response);
        this.isSaved = true;
    });
}

  toggleReportButton(): void {
    this.showReportButton = !this.showReportButton; 
  }

  reportPost(): void {
    this.showReportSuccess = true;
    this.showReportButton = false; 
    document.body.style.overflow = 'hidden';  
  }

  hideReportSuccess(): void {
    this.showReportSuccess = false; 
    document.body.style.overflow = 'auto';  
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
    }, 500); 
  }
}
