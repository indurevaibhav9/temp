import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileInformation } from 'src/app/models/profile-information';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent {
  profileInformation: FormGroup;
  profileInformationData:ProfileInformation=new ProfileInformation();
  showPopUp: boolean = false;
  popUpTitle: string = '';
  popUpBody: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.profileInformation = this.fb.group({
      name: [''], 
      username:[''],
      emailID:[''],
      contactNumber:[null],
      gender:[''],
      aadharcardNumber:[null],
      pancardNumber:['']
    });
  }

  handleSubmit() {
    if (this.profileInformation.valid) {
      this.createRequest(this.profileInformation);
      this.profileInformation.reset();
    }else {
      this.popUpTitle = 'Error!';
      this.popUpBody = 'Please fill out form correctly';
      this.showPopUp = true;
    }
  }

  createRequest(details: FormGroup){
    this.profileInformationData.name=details.value['name'];
    this.profileInformationData.username=details.value['username'];
    this.profileInformationData.contactNumber=details.value['contactNumber'];
    this.profileInformationData.emailID=details.value['emailID'];
    this.profileInformationData.gender=details.value['gender'];
    this.profileInformationData.aadharcardNumber=details.value['aadharcardNumber'];
    this.profileInformationData.pancardNumber=details.value['pancardNumber'];

    this.processRequest(this.profileInformationData);
  }

  processRequest(profileInformationData:ProfileInformation){
    console.log(profileInformationData);
    this.popUpTitle = 'Success!';
    this.popUpBody = 'Information update sucessfully';
    this.showPopUp = true;
  }

  onPopUpClose() {
    this.showPopUp = false; 
  }

  resetForm(): void {
    this.profileInformation.reset();
  }

  handleClick():void{
    this.router.navigate(['/settings']);
  }
}
