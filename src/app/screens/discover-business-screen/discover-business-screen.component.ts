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
        logoUrl: "https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&q=80&w=300",
        isFollowing: false
      },
      {
        id: "2",
        name: "Crafty Creations",
        username: "@crafty_creations",
        logoUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&q=80&w=300",
        isFollowing: false
      },
      {
        id: "3",
        name: "FitLife Gear",
        username: "@fitlife_gear",
        logoUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&q=80&w=300",
        isFollowing: false
      },
      {
        id: "4",
        name: "Pure Bliss Skincare",
        username: "@purebliss_skincare",
        logoUrl: "https://images.unsplash.com/photo-1533612608997-212b06408abb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&q=80&w=300",
        isFollowing: false
      },
      {
        id: "5",
        name: "Sweet Treats Bakery",
        username: "@sweettreats_bakery",
        logoUrl: "https://images.unsplash.com/photo-1542831371-d531d36971e6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&q=80&w=300",
        isFollowing: false
      },
      {
        id: "6",
        name: "Nurture Naturals",
        username: "@nurture_naturals",
        logoUrl: "https://images.unsplash.com/photo-1508050919630-b135583b29d1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&q=80&w=300",
        isFollowing: false
      },
      {
        id: "7",
        name: "Chic Threads",
        username: "@chic_threads",
        logoUrl: "https://images.unsplash.com/photo-1543168256-418811576931?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&q=80&w=300",
        isFollowing: false
      },
      {
        id: "8",
        name: "TechHub Gadgets",
        username: "@techhub_gadgets",
        logoUrl: "https://images.unsplash.com/photo-1517430816045-df4b7de4fbdc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&q=80&w=300",
        isFollowing: false
      },
      {
        id: "9",
        name: "Green Leaf Café",
        username: "@greenleaf_cafe",
        logoUrl: "https://images.unsplash.com/photo-1543779250-3a883b2511d8?auto=format&fit=crop&w=100&q=80",
        isFollowing: false
      },
      {
        id: "10",
        name: "Glamour Styles Salon",
        username: "@glamour_styles_salon",
        logoUrl: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=100&q=80",
        isFollowing: false
      },
    ];
  }
  

 

  toggleFollow(business: DiscoverBusiness): void {
    business.isFollowing = !business.isFollowing;
  }
}