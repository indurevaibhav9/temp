import { Component, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';
import { FeedbackRequest } from 'src/app/models/feedbackrequest';
import { FeedbackResponse } from 'src/app/models/feedback-response.model';

@Component({
  selector: 'app-feedback-screen',
  templateUrl: './feedback-screen.component.html',
  styleUrls: ['./feedback-screen.component.css']
})
export class FeedbackScreenComponent {
  @Output() submitFeedback = new EventEmitter<void>();

  faStar = faStar;
  rating = 0;
  submitted = false;
  showPopUp = false;
  popUpTitle = '';
  popUpBody = '';
  feedbackrequest: FeedbackRequest = new FeedbackRequest();

  ratingTexts: { [key: number]: string } = {
    1: 'Worst',
    2: 'Bad',
    3: 'Okay',
    4: 'Good',
    5: 'Excellent'
  };

  feedbackForm: FormGroup = new FormGroup({
    satisfaction: new FormControl('', [Validators.required, this.atLeastOneStar.bind(this)]),
    feedback: new FormControl('', [Validators.maxLength(150)]),
    featureRequest: new FormControl('', [Validators.maxLength(200)])
  });

  constructor(private feedbackservice: FeedbackService) {}

  setRating(value: number) {
    this.rating = value;
    this.feedbackForm.get('satisfaction')?.setValue(value);  
    this.feedbackForm.get('satisfaction')?.markAsTouched();
  }

  feedbackmethod() {
    this.submitted = true;
    
    if (this.feedbackForm.valid && this.rating > 0) {
      this.feedbackrequest.rating = this.ratingTexts[this.rating];
      this.feedbackrequest.feedbackDescription = this.feedbackForm.get('feedback')?.value;
      this.feedbackrequest.featureRequestDescription = this.feedbackForm.get('featureRequest')?.value;

      this.feedbackservice.feedback(this.feedbackrequest).subscribe({
        next: (response: FeedbackResponse) => {
          this.popUpTitle = 'Thank You!';
          this.popUpBody = 'Your feedback has been submitted successfully.';
          this.showPopUp = true;
        },
        error: (error) => {
          if (error.error && error.error.ErrorCode && error.error.ErrorDescription) {
            this.popUpTitle = `Error ${error.error.ErrorCode}`;
            this.popUpBody = error.error.ErrorDescription;
          } else {
            this.popUpTitle = `Error SPX-4-002`;
            this.popUpBody = 'We are facing some technical issues at the Server. Please come back soon.';
          }
          this.showPopUp = true;
        }
      });
    } else {
      this.popUpTitle = ' Error SPX-4-001';
      this.popUpBody = 'Please ensure all fields are correctly filled out.';
      this.showPopUp = true;
    }
  }
  
  atLeastOneStar(control: FormControl): { [key: string]: boolean } | null {
    const rating = control.value;
    return rating === null || rating === 0 ? { 'noStars': true } : null;
  }

  closePopUp() {
    this.showPopUp = false;
  }
}

