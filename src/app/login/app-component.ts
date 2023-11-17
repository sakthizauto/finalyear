import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "app-login",
    templateUrl: './login.component.html',
    styleUrls: ["login.component.css"]

})

export class LoginComponent {
    title = "login"
    username: string | undefined;
    password: string | undefined;
    constructor(private router: Router) { }
    login() {
        // Add your login logic here
        console.log('Username: ', this.username);
        console.log('Password: ', this.password);

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
