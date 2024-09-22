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
import { OfferDescriptionService } from 'src/app/services/offer-description.service'; // Adjust the path as needed
import { OfferDescriptionDTO } from 'src/app/models/offerdescriptionGet';
import { PostWithImageCouponDTO } from 'src/app/models/postwithimagecouponGet';


@Component({
  selector: 'app-post-with-image-coupon',
  templateUrl: './post-with-image-coupon.component.html',
  styles: [
  ]
})
export class PostWithImageCouponComponent implements OnInit {
  postWithImageCoupon: PostWithImageCouponDTO;

  
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

  constructor(private offerDescriptionService: OfferDescriptionService) {}

  ngOnInit(): void {
    this.offerDescriptionService.getPostWithImageCoupon().subscribe((data: PostWithImageCouponDTO) => {
      this.postWithImageCoupon = data;
    
     
    });


  }
  copyToClipboard(couponCode: string): void {
    navigator.clipboard.writeText(couponCode).then(() => {
      console.log('Coupon code copied to clipboard:', couponCode);
    }).catch(err => {
      console.error('Failed to copy coupon code:', err);
    });
  }
}
