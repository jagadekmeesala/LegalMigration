// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service'; // Import AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  passwordFieldType: string = 'password'; // Default to password type

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService // Inject AuthService
  ) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required], // Removed Validators.email
      password: ['', Validators.required],
    });
  }

  signIn() {
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
    this.router.navigate(['/main/dashboard']);
    console.log("button clicked");
    console.log(this.loginForm);
    if (this.loginForm.invalid) {
      return;
    }

    const { userName, password } = this.loginForm.value;

    this.authService.login(userName, password).subscribe(
      (response) => {
        console.log(response); 
        console.log("Inside the if");
        // Handle successful login
        if (response.status) { // Use 'status' to check according to your backend API's response structure
          this.authService.setUserData(response); // Store the returned data
          localStorage.setItem('isLoggedIn', JSON.stringify(true));
          console.log("This is in!")
          // Redirect based on role_id
          const role_id = this.authService.getRoleId();
          const firstName=this.authService.getFirstName();
          console.log(role_id)
          if (role_id === 1) {
            console.log("Inside the role id 1")
            this.router.navigate(['/main/dashboard']); // Redirect to Firm dashboard
          } else if (role_id === 2) {
            console.log("Inside the role id 2")
            this.router.navigate(['/main/dashboard']); // Redirect to Lawyer dashboard
          } else if (role_id === 3) {
            console.log("Inside the role id 3")
            this.router.navigate(['/main/dashboard']); // Redirect to Client dashboard
          } else {
            console.log("Inside the else")
            this.router.navigate(['/auth/login']); // Default or error page
          }
        } else {
          this.showError('Incorrect username or password');
        }
        
        // localStorage.setItem("role_id",response)
      },
      (error) => {
        // Handle error during API call
        console.error('Login failed', error);
        this.showError('An error occurred during login. Please try again.');
      }
    );
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Login Failed',
      detail: message,
    });
  }
}
