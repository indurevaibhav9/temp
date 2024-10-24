import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchService, BusinessWithImageUrl } from '../../services/search.service';
import { faArrowLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faTimesCircle = faTimesCircle;
  searchQuery: string = '';
  businesses: BusinessWithImageUrl[] = [];

  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
    this.searchService.businesses$.subscribe(businesses => {
      this.businesses = businesses;
    });
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.searchService.search(this.searchQuery);
    } else {
      this.clearSearch();
    }
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.searchService.clearSearch();
    this.searchInput.nativeElement.focus();
  }
}