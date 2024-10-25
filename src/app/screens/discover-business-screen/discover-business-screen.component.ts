import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-discover-business-screen',
  templateUrl: './discover-business-screen.component.html',
  styleUrls: ['./discover-business-screen.component.css']
})
export class DiscoverBusinessScreenComponent {

  faArrowRight = faArrowRight;
  searchQuery: string = '';

  businesses: { name: string, username: string, profilePicture: string, imageUrl?: string, isFollowing: boolean }[] = [
    {
      name: 'Business One',
      username: 'business_one',
      profilePicture: 'https://via.placeholder.com/150',
      isFollowing: false
    },
    {
      name: 'Business Two',
      username: 'business_two',
      profilePicture: 'https://via.placeholder.com/150',
      isFollowing: false
    },
    {
      name: 'Business Three',
      username: 'business_three',
      profilePicture: 'https://via.placeholder.com/150',
      isFollowing: false
    },
    {
      name: 'Business Four',
      username: 'business_four',
      profilePicture: 'https://via.placeholder.com/150',
      isFollowing: false
    },
    {
      name: 'Business Five',
      username: 'business_five',
      profilePicture: 'https://via.placeholder.com/150',
      isFollowing: false
    },
    {
      name: 'Business Six',
      username: 'business_six',
      profilePicture: 'https://via.placeholder.com/150',
      isFollowing: false
    },
    {
      name: 'Business Seven',
      username: 'business_seven',
      profilePicture: 'https://via.placeholder.com/150',
      isFollowing: false
    },
    {
      name: 'Business Eight',
      username: 'business_eight',
      profilePicture: 'https://via.placeholder.com/150',
      isFollowing: false
    },
    {
      name: 'Business Nine',
      username: 'business_nine',
      profilePicture: 'https://via.placeholder.com/150',
      isFollowing: false
    },
    {
      name: 'Business Ten',
      username: 'business_ten',
      profilePicture: 'https://via.placeholder.com/150',
      isFollowing: false
    }
  ];

  constructor(private searchService: SearchService, private router: Router) {}

  toggleFollow(business: any): void {
    business.isFollowing = !business.isFollowing;
    console.log(`${business.isFollowing ? 'Following' : 'Unfollowing'} business: ${business.name}`);
  }

  goToNextPage(): void {
    this.router.navigate(['/consumer-home/adfeed']); 
  }
}
