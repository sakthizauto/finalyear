import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: "app-login",
    templateUrl: './login.component.html',
    styleUrls: ["login.component.css"]

})

export class LoginComponent {
    title = "login"
    username: string | undefined;
    password: string | undefined;
    constructor(private router: Router, private authService: AuthService,) { }
    login() {
        // Add your login logic here
        console.log('Username: ', this.username);
        console.log('Password: ', this.password);
        this.authService.login(this.username!, this.password!).subscribe(
            (response) => {
                console.log('Login successful:', response);
                this.router.navigate(['/dashboard']); // Navigate to dashboard upon successful login
            },
            (error) => {
                console.error('Login failed:', error);
            }
        );


        // Implement your login logic here (authentication check, etc.)
        // For simplicity, I'll assume successful login for demonstration purposes
        const isLoggedIn = true;

        if (isLoggedIn) {
            // Navigate to the 'buy-sell' page upon successful login
            this.router.navigate(['/dashboard']);
        } else {
            // Handle unsuccessful login (show error message, etc.)
        }
    }
}
