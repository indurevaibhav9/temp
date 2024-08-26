import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FeedbackRequest } from "../models/feedbackrequest";
import { Observable } from "rxjs";
import { FeedbackResponse } from "../models/feedback-response";

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
      'https://7700-2409-4081-ae49-7c31-fbd4-7cc7-1fae-3fe2.ngrok-free.app/feedback/saveFeedback',
      feedbackrequest,
      { headers }
    );
  }

}

