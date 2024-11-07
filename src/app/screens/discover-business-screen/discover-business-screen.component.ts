import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router'; 
import { UserProfileDTO } from 'src/app/models/UserProfileDTO';

interface BusinessProfile extends UserProfileDTO {
  isFollowing: boolean;
  id: string; 
}

@Component({
  selector: 'app-discover-business-screen',
  templateUrl: './discover-business-screen.component.html',
  styleUrls: ['./discover-business-screen.component.css']
})
export class DiscoverBusinessScreenComponent implements OnInit {

  faArrowRight = faArrowRight;
  businesses: BusinessProfile[] = [];

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
    this.fetchBusinesses('');
    this.searchService.businesses$.subscribe((businesses) => { 
      this.businesses = businesses.map(business => ({
        ...business,
        id: business.username,  
        isFollowing: false 
      }));
    });
  }

  fetchBusinesses(query: string): void {
    this.searchService.fetchBusinesses(query).subscribe((businesses) => {
      this.businesses = businesses.map(business => ({
        ...business,
        id: business.username, 
        isFollowing: false 
      }));
    });
  }

  toggleFollow(business: BusinessProfile): void {
    this.searchService.toggleFollowStatus(business.id, !business.isFollowing).subscribe((success) => {
      if (success) {
        business.isFollowing = !business.isFollowing;
        console.log(`${business.isFollowing ? 'Following' : 'Unfollowing'} business: ${business.name}`);
      } else {
        console.error('Failed to update follow status');
      }
    });
  }

  goToNextPage(): void {
    this.router.navigate(['/consumer-home/adfeed']); 
  }
}
