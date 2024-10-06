// src/app/components/post-event/post-event.component.ts
import { Component, OnInit } from '@angular/core';
import { faBars, faUserGroup, faMagnifyingGlass, faThumbsUp, faThumbsDown, faLocationArrow, faBookmark, faEllipsisVertical, faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { EventDTO } from 'src/app/models/EventGet'; // Adjust the path as needed
import { OfferDescriptionService } from 'src/app/services/advertisementTypes.service'; // Adjust the path as needed
import { OfferDescriptionDTO } from 'src/app/models/offerdescriptionGet';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-Event',
  templateUrl: './Event.component.html',
  styleUrls: [] // Add if you have a CSS file
})
export class PostEventComponent implements OnInit {
  postEventResponse: EventDTO;

  remainingDays: number;
  isExpired: boolean = false;
  reportVisible: boolean = false; // Property to control visibility of report modal
  showReportButton: boolean = false;
  

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

  constructor(private offerDescriptionService: OfferDescriptionService,private router: Router) {}

  ngOnInit(): void {
    this.offerDescriptionService.getEvent().subscribe((data: EventDTO) => {
      this.postEventResponse = data;


      
      // Calculate remaining days
      const expiryDate = new Date(this.postEventResponse.offerExpiry);
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

  bookNow(): void {
    // Replace the URL with the website you want to redirect to
    window.location.href = 'https://www.example.com';
  }
}
