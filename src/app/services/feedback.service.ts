import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FeedbackRequest } from "../models/feedbackrequest";
import { FeedbackResponse } from "../models/feedback-response";

@Injectable({
  providedIn: "root",
})
export class FeedbackService {
  constructor(private http: HttpClient) {}

  feedback(feedbackrequest: FeedbackRequest, 
           onSuccess: (response: FeedbackResponse) => void, 
           onError: (error: any) => void) {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    });

    this.http.post<FeedbackResponse>(
      'http://localhost:8081/feedback/saveFeedback',
      feedbackrequest,
      { headers }
    ).subscribe({
      next: (response: FeedbackResponse) => {
        onSuccess(response);
      },
      error: (error) => {
        onError(error);
      }
    });
  }
}
