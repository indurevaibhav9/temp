import { Component,Input,OnInit } from '@angular/core';
import { faBars, faUserGroup, faMagnifyingGlass, faThumbsUp, faThumbsDown, faLocationArrow, faBookmark, faEllipsisVertical, faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { AdvertisementDetailsService } from 'src/app/services/advertisementTypes.service'; // Adjust the path as needed
import { OfferDescriptionDTO } from 'src/app/models/offerdescriptionGet';

import { Router } from '@angular/router';
import { AdvertisementDetails } from 'src/app/models/ad-details';
@Component({
  selector: 'app-Coupon',
  templateUrl: './Coupon.component.html',
  styles: [
  ]
})
export class CouponComponent implements OnInit {
  @Input() couponDetails!: AdvertisementDetails; 
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

  constructor(private AdvertisementDetailsService: AdvertisementDetailsService,private router: Router) {}

  ngOnInit(): void {
   
    //   // Calculate remaining days
      const expiryDate = new Date(this.couponDetails.offerExpiry);
      const currentDate = new Date();
      const timeDiff = expiryDate.getTime() - currentDate.getTime();
      this.remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert time difference to days

      // Check if expired
      if (this.remainingDays <= 0) {
        this.isExpired = true;
      }
     
    };

    
  

  showDetails() {
    this.router.navigate(['/ad-feed/offer-description']); // Now using injected router
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
