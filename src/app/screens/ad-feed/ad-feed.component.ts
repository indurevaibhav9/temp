import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs'; // Ensure this is imported
import { AdvertisementDetailsService } from 'src/app/services/advertisementTypes.service'; 
import { OfferDescriptionDTO } from 'src/app/models/offerdescriptionGet';

import { AdvertisementDetails } from 'src/app/models/ad-details';

@Component({
  selector: 'app-ad-feed',
  templateUrl: './ad-feed.component.html',
  styleUrls: []
})
export class AdFeedComponent implements OnInit {
  ads: AdvertisementDetails []= [];

  constructor(private AdvertisementDetailsService: AdvertisementDetailsService) {}

  ngOnInit(): void {
    this.fetchAds();
  }

  fetchAds(): void {
    // const post$ = this.AdvertisementDetailsService.getPost();
    // const event$ = this.AdvertisementDetailsService.getEvent();
    // const coupon$ = this.AdvertisementDetailsService.getCoupon();

    // forkJoin<[PostDTO[], EventDTO[], CouponCodeDTO[]]>([post$, event$, coupon$]).subscribe(
    //   ([postResponse, eventResponse, couponResponse]) => {
    //     this.ads = [
    //       ...postResponse,
    //       ...eventResponse,
    //       ...couponResponse
    //     ];
    //   },
    //   (error: any) => {
    //     console.error('Error fetching advertisements:', error);
    //   }
    // );
   this.AdvertisementDetailsService.getAdvertisementDetails().subscribe(
    {
      next:(response)=>{
        //console.log(response);//if there is no error and positive scenario
        this.ads=response;//
      },
      error:(error)=>{
        console.log(error);
      }
    }
   )
  }

  
}
