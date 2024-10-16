import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRightFromBracket, faBars, faCircleQuestion, faFileLines, faFilePen, faGear, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ConsumerNavigationService } from 'src/app/services/consumer-navigation.service';
import { UserProfileDto } from 'src/app/models/UserProfileDTO';

@Component({
  selector: 'app-consumer-top-navbar',
  templateUrl: './consumer-top-navbar.component.html',
  styleUrls: ['./consumer-top-navbar.component.css']
})
export class ConsumerTopNavbarComponent {
  faIcons = {
    bars: faBars,
    search: faSearch,
    gear: faGear,
    filePen: faFilePen,
    fileLines: faFileLines,
    circleQuestion: faCircleQuestion,
    arrowRightFromBracket: faArrowRightFromBracket,
  };

  constructor(private router: Router, private consumernavigationservice: ConsumerNavigationService ) {}

  @Input() userinformation!: UserProfileDto[];
  user: any;

  ngOnInit(): void{
    this.fetchUserInformation();
  }

  fetchUserInformation() {
    this.consumernavigationservice.getUserDetails().subscribe(
      (data: UserProfileDto[]) => {
        this.user = data;
        console.log('Consumer Details:', this.user);

      }
    );
  }
}