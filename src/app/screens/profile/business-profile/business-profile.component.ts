import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business-profile.service';
import { mdiEmail, mdiFacebook, mdiInstagram } from '@mdi/js';


@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})
export class BusinessProfileComponent implements OnInit {
  businesses: any[] = [];
  business: any;
  selectedTab: string = 'posts';
  mdiEmail = mdiEmail;
  mdiInstagram = mdiInstagram;
  mdiFacebook = mdiFacebook;

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.getBusinesses().subscribe(data => {
      this.businesses = data;
      this.business = this.businesses[1];
    });
  }

  switchTab(tab: string): void {
    this.selectedTab = tab;
  }
}