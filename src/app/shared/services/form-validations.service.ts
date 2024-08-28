import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationsService {
  required(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return { required: true };
    }
    return null;
  }

  email(control: AbstractControl): ValidationErrors | null {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!pattern.test(control.value)) {
      return { email: true };
    }
    return null;
  }
}
