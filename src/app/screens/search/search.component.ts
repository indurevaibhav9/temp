import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { faArrowLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faTimesCircle = faTimesCircle;
  searchQuery: string = '';
  businesses: { name: string, username: string, profilePicture: string }[] = [];
  // nearbyBusinesses: { name: string, username: string, profilePicture: string }[] = [];
  allBusinesses: { name: string, username: string, profilePicture: string }[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.loadBusinesses('');
    // this.loadNearbyBusinesses();
  }

  loadBusinesses(query: string): void {
    this.searchService.getBusinesses(query).subscribe((data) => {
      console.log('Fetched Businesses:', data);
      this.allBusinesses = data;
      this.businesses = data;
    });
  }

  // loadNearbyBusinesses(): void {
  //   this.searchService.getNearbyBusinesses().subscribe((data) => {
  //     console.log('Fetched Nearby Businesses:', data);
  //     this.nearbyBusinesses = data;
  //   });
  // }

  onSearch(): void {
    console.log("Search query:", this.searchQuery);
    console.log("All businesses:", this.allBusinesses);
  
    if (this.searchQuery) {
      const searchQueryLower = this.searchQuery.toLowerCase();
  
      this.businesses = this.allBusinesses.filter(business => {
        const businessName = business.name.toLowerCase();
        const businessUsername = business.username.toLowerCase();
  
        const match = businessName.includes(searchQueryLower) || businessUsername.includes(searchQueryLower);
        
        console.log(`Business name: ${businessName}, Business username: ${businessUsername}, Match: ${match}`);
        
        return match;
      });
  
      console.log("Filtered businesses:", this.businesses);
    } else {
      this.businesses = this.allBusinesses;
    }
  }
  

  // onSearch(): void {
  //   console.log("Search query:", this.searchQuery);

  //   if (this.searchQuery) {
  //     // Fetch businesses based on the search query from the backend
  //     this.loadBusinesses(this.searchQuery);
  //   } else {
  //     // If search query is empty, fetch all businesses again
  //     this.loadBusinesses('');
  //   }
  // }

  clearSearch(): void {
    this.searchQuery = '';
    this.loadBusinesses('');
  }

  goBack(): void {
    // do later
  }
}
