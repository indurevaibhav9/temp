import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-discover-business-screen',
  templateUrl: './discover-business-screen.component.html',
  styleUrls: ['./discover-business-screen.component.css']
})
export class DiscoverBusinessScreenComponent implements OnInit {

  faArrowRight = faArrowRight;
  searchQuery: string = '';
  businesses: { name: string, username: string, profilePicture: string, imageUrl?: string, isFollowing: boolean }[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.loadBusinesses(''); 
  }

  loadBusinesses(query: string): void {
    console.log('Sending query to backend:', query);
    this.searchService.getBusinesses(query).subscribe((data) => {
      console.log('Fetched Businesses:', data);
      this.businesses = data.map(business => ({
        ...business,
        isFollowing: false // Initialize isFollowing to false for all businesses
      }));
      

      this.businesses.forEach(business => {
        this.searchService.getImageUrl(business.profilePicture).subscribe(imageUrl => {
          business.imageUrl = imageUrl;
        });
      });
    });
  }

  onSearch(): void {
    console.log("Search query:", this.searchQuery);

    if (this.searchQuery) {
      this.loadBusinesses(this.searchQuery);
    } else {
      console.log('Empty search query, nothing to fetch.');
    }
  }

  clearSearch(): void {
    this.searchQuery = '';
    console.log('Search cleared');
    this.businesses = [];
  }

  toggleFollow(business: any): void {
    business.isFollowing = !business.isFollowing;
    console.log(`${business.isFollowing ? 'Following' : 'Unfollowing'} business: ${business.name}`);
  }

  goBack(): void {
    console.log('Back button clicked');
  }
}


 