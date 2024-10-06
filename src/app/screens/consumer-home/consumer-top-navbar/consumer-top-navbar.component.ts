import { Component } from '@angular/core';
import { faArrowRightFromBracket, faBars, faCircleQuestion, faFileLines, faFilePen, faGear, faSearch } from '@fortawesome/free-solid-svg-icons';
import { JwtDecoderService } from 'src/app/services/jwtDecoder/jwt-decoder.service';
import { DecodedToken } from 'src/app/models/decodedToken';

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

  constructor(private jwtDecoder: JwtDecoderService) {}
  isUserPresentInDatabase(idTokenKey: string | null) {
    const token = localStorage.getItem('token')!;
    const decodedInfoFromToken: DecodedToken = this.jwtDecoder.decodeInfoFromToken(token);
    console.log(decodedInfoFromToken);
  }
}