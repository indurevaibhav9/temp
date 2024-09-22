import { Component ,OnInit} from '@angular/core';
import { faBars, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot, faHeart, faBell } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { PostWithImageDTO } from 'src/app/models/postwithimageGet';
import { OfferDescriptionService } from 'src/app/services/offer-description.service'; // Adjust the path as needed
import { OfferDescriptionDTO } from 'src/app/models/offerdescriptionGet';



@Component({
  selector: 'app-post-with-image',
  templateUrl: './post-with-image.component.html',
  styles: [
  ]
})
export class PostWithImageComponent implements OnInit {
  postWithImage: PostWithImageDTO;


  faBars = faBars;
  faUserGroup = faUserGroup;
  faMagnifyingGlass = faMagnifyingGlass;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faLocationArrow = faLocationArrow;
  faBookmark = faBookmark;
  faEllipsisVertical = faEllipsisVertical;
  faLocationDot = faLocationDot;
  faHeart = faHeart;
  faBell = faBell;
  faCircleUser = faCircleUser;

  constructor(private offerDescriptionService: OfferDescriptionService) {}

  ngOnInit(): void {
    this.offerDescriptionService.getPostWithImage().subscribe((data: PostWithImageDTO) => {
      this.postWithImage = data;
    
     
    });
  }


}
