import { Component, OnInit } from '@angular/core';
import { faBars, faUserGroup, faMagnifyingGlass, faThumbsUp, faThumbsDown, faLocationArrow, faBookmark, faEllipsisVertical, faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { PostDTO } from 'src/app/models/PostGet';
import { OfferDescriptionService } from 'src/app/services/advertisementTypes.service'; // Adjust the path as needed
import { Router } from '@angular/router';

@Component({
  selector: 'app-Post',
  templateUrl: './Post.component.html',
  styles: []
})
export class PostWithImageComponent implements OnInit {
  postWithImage: PostDTO;
  remainingDays: number;
  isExpired: boolean = false;
  reportVisible: boolean = false; // Property to control visibility of report modal
  showReportComponent: boolean = false;
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

  constructor(private offerDescriptionService: OfferDescriptionService, private router: Router) {}

  ngOnInit(): void {
    this.offerDescriptionService.getPost().subscribe((data: PostDTO) => {
      this.postWithImage = data;

      // Calculate remaining days
      const expiryDate = new Date(this.postWithImage.offerExpiry);
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
    this.reportVisible = true; // Trigger to show the report button
  }
  toggleReport(): void {
    this.showReportComponent = !this.showReportComponent;
  }
}
