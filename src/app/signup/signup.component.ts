// signup.component.ts
import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: "app-signup",
  templateUrl: './signup.component.html',
  styleUrls: ["signup.component.css"]
})
export class SignupComponent {
  username: string | undefined;
  password: string | undefined;

  constructor(private authService: AuthService) { }

  signUp() {
    this.authService.signUp(this.username!, this.password!).subscribe(
      (response) => {
        console.log('Signup successful:', response);
      },
      (error) => {
        console.error('Signup failed:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Complete error:', error);
        }
      }
    );

  }
}
