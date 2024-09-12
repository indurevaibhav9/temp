import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business-profile.service';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css']
})
export class BusinessProfileComponent implements OnInit {
  businesses: any[] = [];
  business: any;
  selectedTab: string = 'posts';

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    // Fetch data from the service and assign it to 'businesses'
    this.businessService.getBusinesses().subscribe(data => {
      this.businesses = data;
      this.business = this.businesses[1];  // Set default business
    });
  }

  switchTab(tab: string): void {
    this.selectedTab = tab;
  }
}