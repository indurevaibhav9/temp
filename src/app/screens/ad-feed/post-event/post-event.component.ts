// src/app/components/post-event/post-event.component.ts
import { Component, OnInit } from '@angular/core';
import { faBars, faUserGroup, faMagnifyingGlass, faThumbsUp, faThumbsDown, faLocationArrow, faBookmark, faEllipsisVertical, faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { PostEventDTO } from 'src/app/models/posteventGet'; // Adjust the path as needed
import { OfferDescriptionService } from 'src/app/services/offer-description.service'; // Adjust the path as needed
import { OfferDescriptionDTO } from 'src/app/models/offerdescriptionGet';
@Component({
  selector: 'app-post-event',
  templateUrl: './post-event.component.html',
  styleUrls: [] // Add if you have a CSS file
})
export class PostEventComponent implements OnInit {
  postEventResponse: PostEventDTO;
  

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

  constructor(private offerDescriptionService: OfferDescriptionService) {}

  ngOnInit(): void {
    this.offerDescriptionService.getPostEvent().subscribe((data: PostEventDTO) => {
      this.postEventResponse = data;
    
     
    });
  }

  bookNow(): void {
    // Replace the URL with the website you want to redirect to
    window.location.href = 'https://www.example.com';
  }
}
