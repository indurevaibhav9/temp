import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FeedbackRequest } from "../models/feedbackrequest";
import { Observable } from "rxjs";
import { FeedbackResponse } from "../models/feedback-response.model";

@Injectable({
  providedIn: "root",
})
export class FeedbackService {
  constructor(private http: HttpClient) {}

  feedback(feedbackrequest: FeedbackRequest): Observable<FeedbackResponse> {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    });

    return this.http.post<FeedbackResponse>(
      'https://5eb5-2402-e280-3e4b-37f-364f-9cd4-2613-d1ef.ngrok-free.app/feedback/saveFeedback',
      feedbackrequest,
      { headers }
    );
  }

}


