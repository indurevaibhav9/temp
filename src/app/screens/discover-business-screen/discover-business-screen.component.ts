import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router'; // Correct import

@Component({
  selector: 'app-discover-business-screen',
  templateUrl: './discover-business-screen.component.html',
  styleUrls: ['./discover-business-screen.component.css']
})
export class DiscoverBusinessScreenComponent {

  faArrowRight = faArrowRight;
  searchQuery: string = '';
  businesses: { name: string, username: string, profilePicture: string, imageUrl?: string, isFollowing: boolean }[] = [];

  // Inject Router in the constructor
  constructor(private searchService: SearchService, private router: Router) {}

  // Toggle follow status for a business
  toggleFollow(business: any): void {
    business.isFollowing = !business.isFollowing;
    console.log(`${business.isFollowing ? 'Following' : 'Unfollowing'} business: ${business.name}`);
  }

  // Navigate to the next page
  goToNextPage(): void {
    this.router.navigate(['/next-page']); // Specify the correct route here
  }
}
