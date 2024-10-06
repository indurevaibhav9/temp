import { Component, OnInit } from '@angular/core';
import { OfferDescriptionService } from 'src/app/services/advertisementTypes.service';
import { OfferDescriptionDTO } from 'src/app/models/offerdescriptionGet';
import { PostDTO } from 'src/app/models/PostGet';
import { EventDTO } from 'src/app/models/EventGet';
import { CouponCodeDTO } from 'src/app/models/CouponCodeGet';
import { faBars, faUserGroup, faMagnifyingGlass, faLocationDot, faHeart, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ad-feed',
  templateUrl: './ad-feed.component.html',
  styleUrls: []
})
export class AdFeedComponent implements OnInit {

  faBars = faBars;
  faUserGroup = faUserGroup;
  faMagnifyingGlass = faMagnifyingGlass;
  faLocationDot = faLocationDot;
  faHeart = faHeart;
  faBell = faBell;
  faCircleUser = faCircleUser;

  offers: (OfferDescriptionDTO | EventDTO | CouponCodeDTO | PostDTO)[] = [];
  loading: boolean = true;

  constructor(private offerService: OfferDescriptionService) {}

  ngOnInit(): void {
    this.fetchData();
    // Optionally, you could set an interval for continuous fetching
    // setInterval(() => this.fetchData(), 10000); // Fetch every 10 seconds
  }

  fetchData(): void {
    this.loading = true;

    // Fetch offers
    this.offerService.getOfferDescription().subscribe({
      next: (data: OfferDescriptionDTO) => {
        this.offers.push(data);
      },
      error: (err) => console.error(err),
      complete: () => this.loading = false
    });

    // Fetch events
    this.offerService.getEvent().subscribe({
      next: (data: EventDTO) => {
        this.offers.push(data);
      },
      error: (err) => console.error(err),
      complete: () => this.loading = false
    });

    // Fetch posts
    this.offerService.getPost().subscribe({
      next: (data: PostDTO) => {
        this.offers.push(data);
      },
      error: (err) => console.error(err),
      complete: () => this.loading = false
    });

    // Fetch coupons
    this.offerService.getCoupon().subscribe({
      next: (data: CouponCodeDTO) => {
        this.offers.push(data);
      },
      error: (err) => console.error(err),
      complete: () => this.loading = false
    });
  }
}
