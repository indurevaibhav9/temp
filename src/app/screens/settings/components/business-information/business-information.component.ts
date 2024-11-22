import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessInformation } from 'src/app/models/business-information';
import { JwtDecoderService } from 'src/app/services/jwt-decoder.service';
import { SettingsService } from 'src/app/services/settings.service';
import { catchError, finalize } from 'rxjs/operators'; // Import these if you want to handle errors or final actions
import { of } from 'rxjs'; 

@Component({
  selector: 'app-business-information',
  templateUrl: './business-information.component.html',
  styleUrls: ['./business-information.component.css']
})
export class BusinessInformationComponent {
  businessInfo:FormGroup;
  businessInfoData:BusinessInformation=new BusinessInformation();
  showPopUp: boolean = false;
  popUpTitle: string = '';
  popUpBody: string = '';
  username: string='';
  tempUsername:string='isaac_biz09';
  loading: boolean = true;

  constructor(private fb:FormBuilder,private router:Router,private jwtDecoder:JwtDecoderService,private settingsService:SettingsService){
    this.businessInfo=this.fb.group({
      name:[''],
      businessUsername:[''],
      profilePicture:[''],
      email:[''],
      phoneNumber:[''],
      gender:[''],
      businessName:[''],
      businessType:[''],
      bio:[''],
      state:[''],
      city:[''],
      pincode:[''],
      kycDetails: this.fb.group({
        aadharNumber: [''],
        aadharImage: [''],
        pancardNumber: [''],
        pancardImage: ['']
      })
    });
  }
  
  ngOnInit():void{
    const token = localStorage.getItem('token');

    const decodedInfo = token ? this.jwtDecoder.decodeInfoFromToken(token) : this.jwtDecoder.decodeInfoFromToken('');
    this.username = decodedInfo['sub'];

    this.settingsService.getBusinessDetails(this.tempUsername).subscribe({
      next: (response) => {
        try {
          const userData = JSON.parse(response);
          console.log(userData);
          if (userData.length > 0) {
            this.updateFormWithUserData(userData[0]);
          } else {
            console.log('No user data found');
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching data:', error);
      },
      complete: () => {
        this.loading = false; 
      }
    });
  }
  
  private updateFormWithUserData(user: any) {
    this.businessInfo.patchValue({
      name: user.name,
      businessUsername: user.businessUsername,
      profilePicture: user.profilePicture,
      email: user.email,
      phoneNumber: user.phoneNumber,
      gender: user.gender.toLowerCase(),
      businessName: user.businessName,
      businessType: user.businessType,
      bio: user.bio,
      state: user.state,
      city: user.city,
      pincode: user.pincode,
      kycDetails: {
        aadharNumber: user.kycDetails?.aadharNumber,
        aadharImage: user.kycDetails?.aadharImage,
        pancardNumber: user.kycDetails?.pancardNumber,
        pancardImage: user.kycDetails?.pancardImage
      }
    });
  }

  handleSubmit(){
    if (this.businessInfo.valid) {
      this.createRequest(this.businessInfo);
      this.businessInfo.reset();
    }else {
      this.popUpTitle = 'Error!';
      this.popUpBody = 'Please fill out form correctly';
      this.showPopUp = true;
    }
  }

  createRequest(details:FormGroup){
    this.businessInfoData.name=details.value['name'];
    this.businessInfoData.businessUsername=details.value['businessUsername'];
    this.businessInfoData.businessName=details.value['businessName'];
    this.businessInfoData.businessType=details.value['businessType'];
    this.businessInfoData.profilePicture=details.value['profilePicture'];
    this.businessInfoData.phoneNumber=details.value['phoneNumber'];
    this.businessInfoData.pincode=details.value['pincode'];
    this.businessInfoData.city=details.value['city'];
    this.businessInfoData.email=details.value['email'];
    this.businessInfoData.gender=details.value['gender'];
    this.businessInfoData.bio=details.value['bio'];
    this.businessInfoData.state=details.value['state'];
    this.businessInfoData.kycDetails = {
      aadharNumber: details.value.kycDetails['aadharNumber'],
      aadharImage: details.value.kycDetails['aadharImage'],
      pancardNumber: details.value.kycDetails['pancardNumber'],
      pancardImage: details.value.kycDetails['pancardImage']
    };
    this.processRequest(this.businessInfoData);
  }

  processRequest(data:BusinessInformation){
    this.settingsService.postBusinessDetails(data).subscribe({
      next: () => {
        this.popUpTitle = 'Success!';
        this.popUpBody = 'Your business details has been updated successfully.';
        this.showPopUp = true;
        console.log(data); 
      },
      error: (error: HttpErrorResponse) => {
        this.popUpTitle = 'Error!';
        if (error.error && error.error.message) {
          this.popUpBody = `Error: ${error.error.message}`;
        } else {
          this.popUpBody = 'Something went wrong. Please try again.';
        }
        this.showPopUp = true;
      }
    });
  }

  onPopUpClose() {
    this.showPopUp = false; 
    window.location.reload();
  }

  resetForm(): void {
    this.businessInfo.reset();
  }

  handleClick():void{
    this.router.navigate(['/settings']);
  }
}
