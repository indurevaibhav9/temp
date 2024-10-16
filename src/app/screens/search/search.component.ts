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

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    // No need to load all businesses initially
    console.log('Search Component Initialized');
  }

  loadBusinesses(query: string): void {
    console.log('Sending query to backend:', query);
    this.searchService.getBusinesses(query).subscribe((data) => {
      console.log('Fetched Businesses:', data);
      this.businesses = data; // Assign the filtered businesses
    });
  }

  onSearch(): void {
    console.log("Search query:", this.searchQuery);

    if (this.searchQuery) {
      // Fetch filtered businesses based on search query from the backend
      this.loadBusinesses(this.searchQuery);
    } else {
      // If search query is empty, optionally handle it (e.g., clear businesses list)
      console.log('Empty search query, nothing to fetch.');
    }
  }

  clearSearch(): void {
    this.searchQuery = '';
    console.log('Search cleared');
    // Optionally clear the businesses list
    this.businesses = [];
  }

  goBack(): void {
    console.log('Back button clicked');
  }
}
