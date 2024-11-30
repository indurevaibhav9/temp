import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';
import { UserProfileDTO } from 'src/app/models/UserProfileDTO';
import { DecodedToken } from 'src/app/models/decodedToken';
import { JwtDecoderService } from 'src/app/services/jwtDecoder/jwt-decoder.service';

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

  userType: string = '';
  currentUsername: string = '';
  faArrowRight = faArrowRight;
  businesses: BusinessProfile[] = [];
  showPopUp: boolean = false; 
  messageTitle: string = '';
  messageBody: string = '';

  decodedToken: DecodedToken;

  constructor(
    private searchService: SearchService, 
    private router: Router, 
    private jwtDecoder: JwtDecoderService
  ) {}

  ngOnInit(): void {
    this.decodeToken();
    this.fetchBusinesses(); // Fetch businesses after decoding token
  }

  decodeToken(): void {
    const token = localStorage.getItem('token') || '';
    if (token) {
      try {
        this.decodedToken = this.jwtDecoder.decodeInfoFromToken(token);
        this.userType = this.decodedToken["User Type"];
        this.currentUsername = this.decodedToken.sub;
        console.log('Current username is:', this.currentUsername);
        console.log('User type is:', this.userType);
      } catch (error) {
        console.error('Error decoding token:', error);
        this.router.navigate(['/login']); // Redirect to login on token error
      }
    } else {
      console.warn('No token found. Redirecting to login.');
      this.router.navigate(['/login']); // Redirect to login if token is missing
    }
  }

  fetchBusinesses(query: string = 'trending'): void {
    this.searchService.fetchBusinesses(query).subscribe({
      next: (businesses) => {
        this.businesses = businesses.map(business => ({
          ...business,
          id: business.username, 
          isFollowing: false 
        }));
      },
      error: (error) => {
        console.error('Error fetching businesses:', error);
      }
    });
  }

  toggleFollow(business: BusinessProfile): void {
    const Username = this.currentUsername; // Use decoded username
  
    this.searchService.toggleFollowStatus(Username, business.id, !business.isFollowing).subscribe({
      next: () => {
        business.isFollowing = !business.isFollowing;
  
        if (business.isFollowing) {
          this.messageTitle = 'Followed Successfully';
          this.messageBody = `You have successfully followed the business: ${business.name}`;
          this.showPopUp = true; 
        }
        console.log(`${business.isFollowing ? 'Following' : 'Unfollowing'} business: ${business.name}`);
      },
      error: () => {
        console.error('Failed to update follow status');
      }
    });
  }

  closePopUp(): void {
    this.showPopUp = false; 
  }

  getImageUrl(profilePicture: string): string {
    return this.searchService.getImageUrl(profilePicture);
  }

  goToNextPage(): void {
    if (this.userType === 'Consumer') {
      this.router.navigate(['/consumer-home/adfeed']);
    } else if (this.userType === 'Business') {
      this.router.navigate(['/business-home/adfeed']);
    } else {
      this.router.navigate(['/login']);
    }

    console.log('Current username in next page is:', this.currentUsername);
    console.log('User type in next page is:', this.userType);
  }
}
