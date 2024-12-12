import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { OtpService } from "src/app/services/otp/otp.service";
import { JwtDecoderService } from "src/app/services/jwtDecoder/jwt-decoder.service";
import { DecodedToken } from "src/app/models/decodedToken";

@Component({
  selector: "app-otpscreen",
  templateUrl: "./otpscreen.component.html",
})
export class OtpscreenComponent implements OnInit, OnDestroy {
  showPopUp: boolean = false;
  popupMessageTitle: string = "";
  popupMessageBody: string = "";

  timer: number = 30;
  intervalId: any;
  disableResend: boolean = true;
  otpForm: FormGroup;
  otpFormSubmitted: boolean = false;
  phoneNumber: string;
  countryCode: string;
  resendOtpSuccess: boolean = false;
  resendOtpMessage: string = "";
  isLoaderVisible = false;

  constructor(
    private formBuilder: FormBuilder,
    private otpService: OtpService,
    private route: ActivatedRoute,
    private router: Router,
    private jwtDecoder: JwtDecoderService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.startTimer();
    this.route.paramMap.subscribe((params) => {
      this.phoneNumber = params.get("mobileNumber") || "";
      this.countryCode = params.get("countryCode") || "";
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  createForm(): void {
    this.otpForm = this.formBuilder.group({
      otpdigit: [
        "",
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
  }

  handleTimer(): void {
    if (this.timer > 0) {
      this.timer--;
      this.disableResend = true;
      if (this.timer === 0) {
        clearInterval(this.intervalId);
        this.disableResend = false;
      }
    } else {
      this.disableResend = false;
      clearInterval(this.intervalId);
    }
  }

  startTimer(): void {
    this.intervalId = setInterval(() => this.handleTimer(), 1000);
  }

  resendOTP(event: Event): void {
    if (this.disableResend) {
      event.preventDefault();
      return;
    }

    this.isLoaderVisible = true;
    this.otpService.reSendOtp(this.countryCode, this.phoneNumber).subscribe({
      next: (response) => {
        this.isLoaderVisible = false;
        this.timer = 30;
        this.startTimer();
        this.resendOtpSuccess = true;
        this.resendOtpMessage = "OTP resent successfully.";
        setTimeout(() => {
          this.resendOtpSuccess = false;
        }, 10000);
      },
      error: (error) => {
        this.isLoaderVisible = false;
        this.showPopup(
          `Error (${error?.errorCode || "Unable to resend otp"}) `,
          ` ${
            error || "Error occured while resending otp (Internal Server Error)"
          }  `
        );
        this.isLoaderVisible = false;
      },
    });
  }

  onSubmit(): void {
    this.otpFormSubmitted = true;
    if (this.otpForm.valid) {
      const otp = this.otpForm.value.otpdigit;
      this.verifyOtp(this.phoneNumber, otp);
    }
  }

  verifyOtp(phoneNumber: string, otp: string): void {
    this.isLoaderVisible = true;
    this.otpService.verifyOtp(phoneNumber, otp).subscribe({
      next: (response) => {
        const token = response.accessToken;
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", response.refreshToken);
        const decodedInfoFromToken: DecodedToken =
          this.jwtDecoder.decodeInfoFromToken(token);
        const userType = decodedInfoFromToken["User Type"];
        this.redirectBasedOnUserType(userType);
      },
      error: (error) => {
        this.isLoaderVisible = false;
        this.showPopup(
          `Error ${error?.error?.errorCode || ""} `,
          `${
            error?.error?.errorDescription ||
            "Internal server error please try again later"
          } `
        );
      },
    });
  }

  redirectBasedOnUserType(userType: string): void {
    this.isLoaderVisible = false;
    switch (userType) {
      case "Business":
        this.router.navigate(["/business-home/adfeed"]);
        break;
      case "Admin":
        this.router.navigate(["/admin-route"]);
        break;
      case "Consumer":
        this.router.navigate(["/consumer-home/adfeed"]);
        break;
      default:
        setTimeout(() => {
          this.router.navigate(["/login"]);
        }, 3000);
        break;
    }
  }

  showPopup(title: string, body: string) {
    this.popupMessageTitle = title;
    this.popupMessageBody = body;
    this.showPopUp = true;
  }
  handleClosePopUp() {
    this.showPopUp = false;
  }
}
