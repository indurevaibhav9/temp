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
export class CouponComponent extends BasePostComponent implements OnInit {
  @Input() couponDetails!: AdvertisementDetails; 
  reportVisible: boolean = false;
  
  override showReportButton: boolean = false; 
  override showReportSuccess: boolean = false; 
  copyButtonText: string = 'Copy';

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

  constructor(
    protected override advertisementDetailsService: AdvertisementDetailsService, // Add 'override' modifier
    private router: Router
  ) {
    super(advertisementDetailsService); // Call the constructor of the base class
  }

  override ngOnInit(): void { // Add 'override' modifier
    super.ngOnInit(); // Call ngOnInit from the base class
  }

  override toggleReportButton(): void { // Add 'override' modifier
    this.showReportButton = !this.showReportButton; // Toggle visibility
  }

  override reportPost(): void { // Add 'override' modifier
    this.showReportSuccess = true;
    this.showReportButton = false; // Hide the report button after reporting
    document.body.style.overflow = 'hidden';  
  }

  override hideReportSuccess(): void { // Add 'override' modifier
    this.showReportSuccess = false; // Hide the success message
    document.body.style.overflow = 'auto';  // Re-enable scrolling
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
