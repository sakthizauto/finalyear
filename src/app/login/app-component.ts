import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from "../services/login.service";

@Component({
    selector: "app-login",
    templateUrl: './login.component.html',
    styleUrls: ["login.component.css"]

})

export class LoginComponent {
    email: string = '';
    password: string = '';

    constructor(private loginService: LoginService, private router: Router) { }

    onLoginClick(): void {

        this.loginService.loginasuser(this.email, this.password).subscribe(

            (response) => {
                console.log('Login successfully:', response);
                this.router.navigate(['/ai-advisor']);

                // Handle success, e.g., redirect to login page
            },
            (error) => {
                console.error('Error creating user:', error);
                // Handle error, e.g., display an error message
            }
        );
    }
}
