
import { AuthService } from "src/app/services/auth.service";


import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs'; // Ensure this is imported
import { AdvertisementDetailsService } from 'src/app/services/advertisementTypes.service'; 
// import { OfferDescriptionDTO } from 'src/app/models/offerdescriptionGet';

import { AdvertisementDetails } from 'src/app/models/ad-details';

@Component({
  selector: 'app-ad-feed',
  templateUrl: './ad-feed.component.html',
  styleUrls: []
})
export class AdFeedComponent implements OnInit {
  ads: AdvertisementDetails []= [];

  constructor(private AdvertisementDetailsService: AdvertisementDetailsService,private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
  ngOnInit(): void {
    this.fetchAds();
  }
  isExpired(offerExpiry: string): boolean {
    const expiryDate = new Date(offerExpiry);
    const currentDate = new Date();
    return expiryDate < currentDate;
  }
  fetchAds(): void {
   
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
