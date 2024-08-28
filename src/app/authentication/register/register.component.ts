// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { MessageService } from 'primeng/api';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss'],
//   providers: [MessageService]
// })
// export class RegisterComponent implements OnInit {
//   loginForm: FormGroup;
//   selectedOption: string | null = null;
//   showLawyerFields: boolean = false;
//   showClientFields: boolean = false;
//   showFirmFields: boolean = false; // Added for Firm role

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private messageService: MessageService
//   ) {
//     this.loginForm = this.fb.group({
//       firstName: ['', Validators.required],
//       middleName: [''],
//       lastName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       contactNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
//       dob: ['', Validators.required],
//       age: ['', [Validators.required, Validators.min(0)]],
//       city: ['', Validators.required],
//       district: [''],
//       state: ['', Validators.required],
//       gender: ['', Validators.required],
//       role: ['', Validators.required],
//       college: [''],
//       degree: [''],
//       experience: [''],
//       casesDealt: [''],
//       lawCategory: [''],
//       occupation: [''],
//       activeCases: [''],
//       firmName: [''], // Added for Firm role
//       firmSize: [''], // Added for Firm role
//       firmCasesDealt: [''] // Added for Firm role
//     });
//   }

//   ngOnInit(): void {}

//   onRoleChange(event: any) {
//     this.selectedOption = event.target.value;
//     this.showLawyerFields = this.selectedOption === 'Lawyer';
//     this.showClientFields = this.selectedOption === 'Client';
//     this.showFirmFields = this.selectedOption === 'Firm'; // Show Firm fields when selected
//   }

//   onSubmit() {
//     if (this.loginForm.valid) {
//       console.log(this.loginForm.value);
//       this.router.navigate(['/login']);
//     } else {
//       Object.keys(this.loginForm.controls).forEach(key => {
//         const control = this.loginForm.get(key);
//         if (control && control.invalid) {
//           const errorMessage = this.getErrorMessage(key, control);
//           this.messageService.add({
//             severity: 'error',
//             summary: 'Registration Failed',
//             detail: errorMessage
//           });
//         }
//       });
//     }
//   }

//   getErrorMessage(controlName: string, control: any): string {
//     if (control.errors) {
//       if (control.errors.required) {
//         return `${this.getLabel(controlName)} is required.`;
//       }
//       if (control.errors.email) {
//         return `Invalid email format.`;
//       }
//       if (control.errors.pattern) {
//         return `Invalid contact number.`;
//       }
//       if (control.errors.min) {
//         return `Age must be a positive number.`;
//       }
//     }
//     return '';
//   }

//   getLabel(controlName: string): string {
//     const labels: { [key: string]: string } = {
//       firstName: 'First Name',
//       lastName: 'Last Name',
//       email: 'Email',
//       contactNo: 'Contact Number',
//       dob: 'Date of Birth',
//       age: 'Age',
//       city: 'City',
//       state: 'State',
//       gender: 'Gender',
//       role: 'Role',
//       college: 'College',
//       degree: 'Degree',
//       experience: 'Experience',
//       casesDealt: 'Cases Dealt',
//       lawCategory: 'Law Category',
//       occupation: 'Occupation',
//       activeCases: 'Active Cases',
//       firmName: 'Firm Name', // Added label for Firm Name
//       firmSize: 'Firm Size', // Added label for Firm Size
//       firmCasesDealt: 'Number of Cases Dealt' // Added label for Firm Cases Dealt
//     };
//     return labels[controlName] || controlName;
//   }

//   isMenuOpen = false;

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   selectOption(option: string) {
//     this.selectedOption = option;
//     this.isMenuOpen = false;
//   }
// }





import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  selectedOption: string | null = null;
  showLawyerFields: boolean = false;
  showClientFields: boolean = false;
  showFirmFields: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private authService:AuthService
  ) {
    this.loginForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dob: ['', Validators.required],
      age: ['', [Validators.min(0)]],
      city: ['', Validators.required],
      district: [''],
      state: ['', Validators.required],
      gender: ['', Validators.required],
      role: ['', Validators.required],
      college: [''],
      degree: [''],
      experience: [''],
      casesDealt: [''],
      lawCategory: [''],
      occupation: [''],
      activeCases: [''],
      firmName: [''],
      firmSize: [''],
      firmCasesDealt: [''],
    });
  }

  ngOnInit(): void {}

  onRoleChange(event: any) {
    this.selectedOption = event.target.value;
    this.showLawyerFields = this.selectedOption === 'Lawyer';
    this.showClientFields = this.selectedOption === 'Client';
    this.showFirmFields = this.selectedOption === 'Firm';
  }

  onSubmit() {
    let data = {};
    if (this.loginForm.valid) {
      // const data = new FormData();
      // console.log('Datataaaaa', data);
      // Object.keys(this.loginForm.controls).forEach(FormData(key) => {
      //   const control = this.loginForm.get(key);
      //   if (control) {
      //     data.append(key, control.value);
      //   }
      // });

      // // Log FormData contents for debugging
      // data.forEach((value, key) => {
      //   console.log(`${key}: ${value}`);
      // });
      if (this.loginForm.get('role')?.value === 'Lawyer') {
        data = {
         "firstName": this.loginForm.get('firstName')?.value,
          "lastName": this.loginForm.get('lastName')?.value,
          "middleName": this.loginForm.get('middleName')?.value,
          "dob": this.loginForm.get('dob')?.value,
          "email": this.loginForm.get('email')?.value,
          "gender": this.loginForm.get('gender')?.value,
          "city": this.loginForm.get('city')?.value,
          "district": this.loginForm.get('district')?.value,
          "state": this.loginForm.get('state')?.value,
          "contactNo": this.loginForm.get('contactNo')?.value,
          "roles": this.loginForm.get('role')?.value,

          "college": this.loginForm.get('college')?.value,
          "degree": this.loginForm.get('degree')?.value,
          "experience": this.loginForm.get('experience')?.value,
          "lawyerCategory": this.loginForm.get('lawCategory')?.value,
        };
      }

      if (this.loginForm.get('role')?.value === 'Client') {
        data = {
          "firstName": this.loginForm.get('firstName')?.value,
          "lastName": this.loginForm.get('lastName')?.value,
          "middleName": this.loginForm.get('middleName')?.value,
          "dob": this.loginForm.get('dob')?.value,
          "email": this.loginForm.get('email')?.value,
          "gender": this.loginForm.get('gender')?.value,
          "city": this.loginForm.get('city')?.value,
          "district": this.loginForm.get('district')?.value,
          "state": this.loginForm.get('state')?.value,
          "contactNo": this.loginForm.get('contactNo')?.value,
          "roles": this.loginForm.get('role')?.value,

          "occupation": this.loginForm.get('occupation')?.value,
          "activeCases": this.loginForm.get('activeCases')?.value,
        };
      }

      if (this.loginForm.get('role')?.value === 'Firm') {
        data = {
          "firstName": this.loginForm.get('firstName')?.value,
          "lastName": this.loginForm.get('lastName')?.value,
          "middleName": this.loginForm.get('middleName')?.value,
          "dob": this.loginForm.get('dob')?.value,
          "email": this.loginForm.get('email')?.value,
          "gender": this.loginForm.get('gender')?.value,
          "city": this.loginForm.get('city')?.value,
          "district": this.loginForm.get('district')?.value,
          "state": this.loginForm.get('state')?.value,
          "contactNo": this.loginForm.get('contactNo')?.value,
          "roles": this.loginForm.get('role')?.value,

          "firmName": this.loginForm.get('firmName')?.value,
          "firmSize": this.loginForm.get('firmSize')?.value,
          "firmCasesDealt": this.loginForm.get('firmCasesDealt')?.value,
        };
      }
      this.authService.register(data).subscribe({
        next: (response) => {
          console.log('Inisde the if');
          console.log('Registration successful:', response);
          this.messageService.add({
            severity: 'success',
            summary: 'Registration Successful',
            detail: 'You have registered successfully!',
          });
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log('Inside the error');
          console.error('Error response:', err);
          this.messageService.add({
            severity: 'error',
            summary: 'Registration Failed',
            detail:
              err.error.message ||
              'There was an error during registration. Please try again.',
          });
        },
        complete: () => {
          console.log('Registration process completed.');
        },
      });
    } else {
      Object.keys(this.loginForm.controls).forEach((key) => {
        const control = this.loginForm.get(key);
        if (control && control.invalid) {
          const errorMessage = this.getErrorMessage(key, control);
          this.messageService.add({
            severity: 'error',
            summary: 'Registration Failed',
            detail: errorMessage,
          });
        }
      });
    }
  }

  getErrorMessage(controlName: string, control: any): string {
    if (control.errors) {
      if (control.errors.required) {
        return `${this.getLabel(controlName)} is required.`;
      }
      if (control.errors.email) {
        return `Invalid email format.`;
      }
      if (control.errors.pattern) {
        return `Invalid contact number.`;
      }
      if (control.errors.min) {
        return `Age must be a positive number.`;
      }
    }
    return '';
  }

  getLabel(controlName: string): string {
    const labels: { [key: string]: string } = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      contactNo: 'Contact Number',
      dob: 'Date of Birth',
      age: 'Age',
      city: 'City',
      state: 'State',
      gender: 'Gender',
      role: 'Role',
      college: 'College',
      degree: 'Degree',
      experience: 'Experience',
      casesDealt: 'Cases Dealt',
      lawCategory: 'Law Category',
      occupation: 'Occupation',
      activeCases: 'Active Cases',
      firmName: 'Firm Name',
      firmSize: 'Firm Size',
      firmCasesDealt: 'Number of Cases Dealt',
    };
    return labels[controlName] || controlName;
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isMenuOpen = false;
  }
}