import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidationsService } from 'src/app/shared/services/form-validations.service';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss'],
})
export class CreateEditUserComponent implements OnInit {
  createAndEditForm!: FormGroup;
  submitted: boolean = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private fv: FormValidationsService
  ) {}

  ngOnInit(): void {
    this.createAndEditForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      emailid: ['', [Validators.required, this.fv.email]],
      phone: ['', Validators.required],
      userid: ['', Validators.required],
    });

    const editMode = JSON.parse(localStorage.getItem('isEdit') || 'false');
    if (editMode === true) {
      let data = JSON.parse(localStorage.getItem('user') || '');
      if (data) {
        let user = data[0];
        this.createAndEditForm.setValue(user);
      }
    }
  }
  back() {
    localStorage.removeItem('user');
    localStorage.removeItem('isEdit');
    this.router.navigate(['/main/dashboard/admin/users']);
  }
  addUser() {
    this.submitted = true;
    if (this.createAndEditForm.valid) {
    } else {
      this.createAndEditForm.markAllAsTouched();
    }
  }
}
