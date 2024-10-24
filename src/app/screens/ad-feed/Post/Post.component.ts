import { Component, Input, OnInit } from '@angular/core';
import { faBars, faUserGroup, faMagnifyingGlass, faThumbsUp, faThumbsDown, faLocationArrow, faBookmark, faEllipsisVertical, faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
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

  constructor(private AdvertisementDetailsService: AdvertisementDetailsService) {}

  ngOnInit(): void {
    const expiryDate = new Date(this.postDetails.offerExpiry);
    const currentDate = new Date();
    const timeDiff = expiryDate.getTime() - currentDate.getTime();
    this.remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (this.remainingDays <= 0) {
      this.isExpired = true;
    }
  }

  likePost(): void {
    const advertisementId = this.postDetails.advertisementId;

    this.triggerAnimation('like');

    this.AdvertisementDetailsService.updateLikes(advertisementId, (updatedPost) => {
      this.postDetails.likes = updatedPost.likes;
    });
  }

  dislikePost(): void {
    const advertisementId = this.postDetails.advertisementId;

    this.triggerAnimation('dislike');

    this.AdvertisementDetailsService.updateDislikes(advertisementId, (updatedPost) => {
      this.postDetails.dislikes = updatedPost.dislikes;
    });
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
