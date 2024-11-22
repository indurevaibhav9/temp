import { Component } from '@angular/core';
import { faArrowRightFromBracket, faBars, faCircleQuestion, faDiceD20, faFileLines, faFilePen, faGear, faMessage, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-consumer-top-navbar',
  templateUrl: './consumer-top-navbar.component.html',
  styleUrls: ['./consumer-top-navbar.component.css']
})
export class ConsumerTopNavbarComponent {
  faBars = faBars;
  faSearch = faSearch;
  faMessage = faMessage;
  faGear = faGear;
  faFilePen = faFilePen;
  faDiceD20 = faDiceD20;
  faCircleQuestion = faCircleQuestion;
  faFileLines = faFileLines;
  faArrowRightFromBracket = faArrowRightFromBracket;

  toggleSidebar() {
    const consumerTopNavbar = document.querySelector('.consumer-top-navbar') as HTMLElement;
    const bottomNavbar = document.querySelector('#bottom-navbar') as HTMLElement;

    if (consumerTopNavbar) {
      consumerTopNavbar.classList.toggle('drawer-open'); // Change this to the appropriate class for showing/hiding the top navbar
    }

    if (bottomNavbar) {
      bottomNavbar.classList.toggle('bottom-navbar-shifted');
    }
  }
}
