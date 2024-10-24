import { Component,Input ,OnInit} from '@angular/core';
import { AdvertisementDetails } from 'src/app/models/ad-details';
import { AdvertisementDetailsService } from 'src/app/services/advertisementTypes.service';
@Component({
  selector: 'app-base-post',
  templateUrl: './base-post.component.html',
  styleUrls: []
})
export class BasePostComponent implements OnInit {
  @Input() adDetails!: AdvertisementDetails;
  
  remainingDays: number;
  isExpired: boolean = false;
  showLikeAnimation: boolean = false; 
  showDislikeAnimation: boolean = false;
  isSaved: boolean = false; 
  showSavedMessage: boolean = false; 
  showReportButton: boolean = false; 
  showReportSuccess: boolean = false; 

  constructor(protected AdvertisementDetailsService: AdvertisementDetailsService) {
    this.AdvertisementDetailsService = AdvertisementDetailsService;
  }

  ngOnInit(): void {
    this.calculateRemainingDays();
  }

  private calculateRemainingDays(): void {
    const expiryDate = new Date(this.adDetails.offerExpiry);
    const currentDate = new Date();
    const timeDiff = expiryDate.getTime() - currentDate.getTime();
    this.remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (this.remainingDays <= 0) {
      this.isExpired = true;
    }
  }

  
  likePost(): void {
    const advertisementId = this.adDetails.advertisementId;

    this.triggerAnimation('like');

    this.AdvertisementDetailsService.updateLikes(advertisementId, (updatedPost) => {
      this.adDetails.likes = updatedPost.likes;
    });
  }

  dislikePost(): void {
    const advertisementId = this.adDetails.advertisementId;

    this.triggerAnimation('dislike');

    this.AdvertisementDetailsService.updateDislikes(advertisementId, (updatedPost) => {
      this.adDetails.dislikes = updatedPost.dislikes;
    });
  }

  savePost(): void {
    const advertisementId = this.adDetails.advertisementId;
    const username = this.adDetails.username;

    this.AdvertisementDetailsService.savePost(username, advertisementId, (response) => {
      console.log('Post saved successfully:', response);
      this.isSaved = true;
      this.showSavedMessage = true;

      setTimeout(() => {
        this.showSavedMessage = false;
        this.isSaved = false; 
      }, 500);
    });
  }

  toggleReportButton(): void {
    this.showReportButton = !this.showReportButton;
  }

  reportPost(): void {
    // Logic to report the post can be added here
    this.showReportSuccess = true;
    this.showReportButton = false;
  }

  hideReportSuccess(): void {
    this.showReportSuccess = false;
  }

  private triggerAnimation(type: 'like' | 'dislike') {
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
