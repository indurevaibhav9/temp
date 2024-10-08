import { Component, OnInit } from '@angular/core';
import { DiscoverBusiness } from 'src/app/models/discover-business-screen';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-discover-business-screen',
  templateUrl: './discover-business-screen.component.html',
  styleUrls: ['./discover-business-screen.component.css']
})
export class DiscoverBusinessScreenComponent implements OnInit {

  faArrowRight = faArrowRight;

  businesses: DiscoverBusiness[] = []; 

  constructor() {}

  ngOnInit(): void {
    this.populateBusinesses();
  }

  populateBusinesses(): void {
    this.businesses = [
      {
        id: "1",
        name: "EcoWear Boutique",
        username: "@ecowear_boutique",
        logoUrl: "assets/images/ecowear_boutique_logo.png",
        isFollowing: false
      },
      {
        id: "2",
        name: "Crafty Creations",
        username: "@crafty_creations",
        logoUrl: "assets/images/crafty_creations_logo.png",
        isFollowing: false
      },
      {
        id: "3",
        name: "FitLife Gear",
        username: "@fitlife_gear",
        logoUrl: "assets/images/fitlife_gear_logo.png",
        isFollowing: false
      },
      {
        id: "4",
        name: "Pure Bliss Skincare",
        username: "@purebliss_skincare",
        logoUrl: "assets/images/purebliss_skincare_logo.png",
        isFollowing: false
      },
      {
        id: "5",
        name: "Sweet Treats Bakery",
        username: "@sweettreats_bakery",
        logoUrl: "assets/images/sweettreats_bakery_logo.png",
        isFollowing: false
      },
      {
        id: "6",
        name: "Nurture Naturals",
        username: "@nurture_naturals",
        logoUrl: "assets/images/nurture_naturals_logo.png",
        isFollowing: false
      },
      {
        id: "7",
        name: "Chic Threads",
        username: "@chic_threads",
        logoUrl: "assets/images/chic_threads_logo.png",
        isFollowing: false
      },
      {
        id: "8",
        name: "TechHub Gadgets",
        username: "@techhub_gadgets",
        logoUrl: "assets/images/techhub_gadgets_logo.png",
        isFollowing: false
      },
      {
        id: "9",
        name: "Green Leaf Café",
        username: "@greenleaf_cafe",
        logoUrl: "assets/images/greenleaf_cafe_logo.png",
        isFollowing: false
      },
      {
        id: "10",
        name: "Glamour Styles Salon",
        username: "@glamour_styles_salon",
        logoUrl: "assets/images/glamour_styles_salon_logo.png",
        isFollowing: false
      },
    ];
  }

  toggleFollow(business: DiscoverBusiness): void {
    business.isFollowing = !business.isFollowing;
  }
}