import { Component,OnInit } from '@angular/core';
import { faBars, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot, faHeart, faBell } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { OfferDescriptionService } from 'src/app/services/advertisementTypes.service'; // Adjust the path as needed
import { OfferDescriptionDTO } from 'src/app/models/offerdescriptionGet';
import { CouponCodeDTO } from 'src/app/models/CouponCodeGet';

import { Router } from '@angular/router';
@Component({
  selector: 'app-Coupon',
  templateUrl: './Coupon.component.html',
  styles: [
  ]
})
export class PostWithImageCouponComponent implements OnInit {
  postWithImageCoupon: CouponCodeDTO;
  remainingDays: number;
  isExpired: boolean = false;
  reportVisible: boolean = false; // Property to control visibility of report modal
  showReportButton: boolean = false;
  copyButtonText: string = 'Copy'; // Initially set the copy button text
  
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

  constructor(private offerDescriptionService: OfferDescriptionService,private router: Router) {}

  ngOnInit(): void {
    this.offerDescriptionService.getCoupon().subscribe((data: CouponCodeDTO) => {
      this.postWithImageCoupon = data;
      // Calculate remaining days
      const expiryDate = new Date(this.postWithImageCoupon.offerExpiry);
      const currentDate = new Date();
      const timeDiff = expiryDate.getTime() - currentDate.getTime();
      this.remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert time difference to days

      // Check if expired
      if (this.remainingDays <= 0) {
        this.isExpired = true;
      }
     
    });

    
  }
  showDetails() {
    this.router.navigate(['/ad-feed/offer-description']); // Now using injected router
  }
  showReport() {
    this.showReportButton = true; // Show the report button
  }

  confirmReport() {
    this.reportVisible = true; // Show the confirmation message
    this.showReportButton = false; // Hide the report button
  }

  done() {
    this.reportVisible = false; // Hide the confirmation message
    this.showReportButton = false; // Hide the report button
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
