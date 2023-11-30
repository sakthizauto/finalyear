import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SignupserviceService } from 'src/app/services/signup-service';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';



  constructor(private SignupserviceService: SignupserviceService,
    private router: Router) { }

  signupasuser(): void {
    if (this.checkEmailAndPassword(this.email, this.password)) {
      this.SignupserviceService.signupasuser(this.email, this.password).subscribe(
        (response) => {
          console.log('User created successfully:', response);
          this.router.navigate(['']);

          // Handle success, e.g., redirect to login page
        },
        (error) => {
          console.error('Error creating user:', error);
          // Handle error, e.g., display an error message
        }
      );
    } else {
      console.log('Invalid input. Please check your details.');
    }
  }

  checkEmailAndPassword(email: string, password: string) {
    // Check if the email address is valid.
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return false;
    }

    // Check if the password is valid.
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return false;
    }

    // If the email address and password are both valid, return true.
    return true;
  }
}
