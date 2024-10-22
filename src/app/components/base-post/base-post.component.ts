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

  constructor(protected advertisementDetailsService: AdvertisementDetailsService) {
    this.advertisementDetailsService = advertisementDetailsService;
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
    const postId = this.adDetails.id;

    this.adDetails.likes += 1;
    this.triggerAnimation('like');

    this.advertisementDetailsService.updateLikes(postId).subscribe({
      next: (updatedPost) => {
        this.adDetails.likes = updatedPost.likes;
      },
      error: (err) => {
        console.error('Error updating likes:', err);
        this.adDetails.likes -= 1;
      }
    });
  }

  dislikePost(): void {
    const postId = this.adDetails.id;

    this.adDetails.dislikes += 1;
    this.triggerAnimation('dislike');

    this.advertisementDetailsService.updateDislikes(postId).subscribe({
      next: (updatedPost) => {
        this.adDetails.dislikes = updatedPost.dislikes;
      },
      error: (err) => {
        console.error('Error updating dislikes:', err);
        this.adDetails.dislikes -= 1;
      }
    });
  }

  savePost(): void {
    this.isSaved = true;
    this.showSavedMessage = true;

    setTimeout(() => {
      this.showSavedMessage = false;
      this.isSaved = false;
    }, 500);
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
