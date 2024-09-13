import { Component } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Credentials } from "src/app/models/credentials";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: []
})
export class LoginComponent {
  credentials: Credentials = new Credentials();
  icon: string = "ionEyeOff";
  showPassword: boolean = false;

  form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
  });
  submitted = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.credentials.email = this.form.value.email;
    this.credentials.password = this.form.value.password;
    this.authService.login(this.credentials);
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }

  viewPassword() {
    this.showPassword = !this.showPassword;
    this.toggleIcon();
  }

  toggleIcon() {
    this.icon === "ionEyeOff"
      ? (this.icon = "ionEye")
      : (this.icon = "ionEyeOff");
  }
}
