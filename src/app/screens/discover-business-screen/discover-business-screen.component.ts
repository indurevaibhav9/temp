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
    this.fetchBusinesses(); 
  }

  fetchBusinesses(query: string = 'a'): void {
    this.searchService.fetchBusinesses(query).subscribe((businesses) => {
      this.businesses = businesses.map(business => ({
        ...business,
        id: business.username, 
        isFollowing: false 
      }));
    });
  }

  toggleFollow(business: BusinessProfile): void {
    const sourceUsername = 'johndoe123'; 
    
    this.searchService.toggleFollowStatus(sourceUsername, business.id, !business.isFollowing).subscribe({
      next: () => {
        business.isFollowing = !business.isFollowing;
        console.log(`${business.isFollowing ? 'Following' : 'Unfollowing'} business: ${business.name}`);
      },
      error: () => {
        console.error('Failed to update follow status');
      }
    });
  }
  
  goToNextPage(): void {
    this.router.navigate(['/consumer-home/adfeed']); 
  }
}
