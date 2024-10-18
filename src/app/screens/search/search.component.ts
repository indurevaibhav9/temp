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
  businesses: { name: string, username: string, profilePicture: string, imageUrl?: string }[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    console.log('Search Component Initialized');
  }

  loadBusinesses(query: string): void {
    console.log('Sending query to backend:', query);
    this.searchService.getBusinesses(query).subscribe((data) => {
      console.log('Fetched Businesses:', data);
      this.businesses = data;

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

  goBack(): void {
    console.log('Back button clicked');
  }
}
