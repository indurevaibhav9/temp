// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { BusinessDetails } from 'src/app/models/BusinessDetails';

// @Injectable({
//   providedIn: 'root'
// })
// export class BusinessData {
//     private businessDataSubject = new BehaviorSubject<BusinessDetails>(new BusinessDetails());

//   businessData$ = this.businessDataSubject.asObservable();

//   setBusinessData(data: BusinessDetails) {
//     this.businessDataSubject.next(data);
//   }

//   getBusinessData() {
//     return this.businessDataSubject.value;
//   }
// }

import { Injectable } from '@angular/core';
import { BusinessDetails } from '../models/BusinessRegistration/BusinessDetails';

@Injectable({
  providedIn: 'root'
})
export class BusinessData {
  private businessData: BusinessDetails = new BusinessDetails(); // Initialize to avoid null

  constructor() {}

  setBusinessData(data: BusinessDetails) {
    this.businessData = data;
  }

  getBusinessData(): BusinessDetails {
    return this.businessData;
  }
}


