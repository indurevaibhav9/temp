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
    { name: 'Tech Innovations', username: 'techinnov', profilePicture: 'https://picsum.photos/200/200?random=1', imageUrl: 'https://picsum.photos/400/200?random=1', isFollowing: false },
    { name: 'Green Earth', username: 'greenearth', profilePicture: 'https://picsum.photos/200/200?random=2', imageUrl: 'https://picsum.photos/400/200?random=2', isFollowing: false },
    { name: 'Foodie Delight', username: 'foodiedelight', profilePicture: 'https://picsum.photos/200/200?random=3', imageUrl: 'https://picsum.photos/400/200?random=3', isFollowing: false },
    { name: 'Fashion Hub', username: 'fashionhub', profilePicture: 'https://picsum.photos/200/200?random=4', imageUrl: 'https://picsum.photos/400/200?random=4', isFollowing: false },
    { name: 'Auto World', username: 'autoworld', profilePicture: 'https://picsum.photos/200/200?random=5', imageUrl: 'https://picsum.photos/400/200?random=5', isFollowing: false },
    { name: 'Pet Paradise', username: 'petparadise', profilePicture: 'https://picsum.photos/200/200?random=6', imageUrl: 'https://picsum.photos/400/200?random=6', isFollowing: false },
    { name: 'Gadget Galaxy', username: 'gadgetgalaxy', profilePicture: 'https://picsum.photos/200/200?random=7', imageUrl: 'https://picsum.photos/400/200?random=7', isFollowing: false },
    { name: 'Book Haven', username: 'bookhaven', profilePicture: 'https://picsum.photos/200/200?random=8', imageUrl: 'https://picsum.photos/400/200?random=8', isFollowing: false },
    { name: 'Fitness First', username: 'fitnessfirst', profilePicture: 'https://picsum.photos/200/200?random=9', imageUrl: 'https://picsum.photos/400/200?random=9', isFollowing: false },
    { name: 'Travel Experts', username: 'travelexperts', profilePicture: 'https://picsum.photos/200/200?random=10', imageUrl: 'https://picsum.photos/400/200?random=10', isFollowing: false }
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
