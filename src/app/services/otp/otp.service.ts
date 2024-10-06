import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { OtpResponse } from "../../models/otpResponse";
import { VerifyOtpResponse } from "../../models/verifyOtpResponse";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class OtpService {
  private apiUrl = environment.apiGateway;
  constructor(private http: HttpClient) {}
  isOtpSentToMobile = false;
  sendOtp(mobile: string): Observable<OtpResponse> {
    return this.http
      .post<OtpResponse>(
        `${this.apiUrl}auth/generate-otp`,
        { phoneNumber: mobile },
        { responseType: "json" }
      )
      .pipe(
        tap((response) => {
          console.log(response);
          this.isOtpSentToMobile = true;
        }),
        catchError((error) => {
          console.error("Error sending OTP:", error);
          this.isOtpSentToMobile = false;
          return throwError(
            () => new HttpErrorResponse(error)
          );
        })
      );
  }

  reSendOtp(mobile: string): Observable<OtpResponse> {
    return this.http
      .post(
        `${this.apiUrl}auth/resend-otp`,
        { phoneNumber: mobile },
        { responseType: "text" }
      )
      .pipe(
        map((response: string) => {
          console.log(response);
          return {success: true, message: response}
        }),
        catchError((error: HttpErrorResponse) => {
          console.log("Error in HTTP response:", error);

          let errorMessage = "Failed to send OTP. Please try again later.";
          if (error.error && typeof error.error === "string") {
            try {
              const errorBody = JSON.parse(error.error);
              if (errorBody.errorDescription) {
                errorMessage = errorBody.errorDescription;
              }
            } catch (e) {
              console.log("Error parsing error response body:", e);
            }
          }

          return throwError(() => new Error(errorMessage));
        })
      );
  }

  verifyOtp(mobile: string, otp: string): Observable<VerifyOtpResponse> {
    return this.http.post<VerifyOtpResponse>(`${this.apiUrl}auth/verify-otp`, {
      phoneNumber: mobile,
      otp: otp,
    });
  }
}
