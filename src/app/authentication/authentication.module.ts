import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ToastModule } from 'primeng/toast';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ToastModule,
    ReactiveFormsModule,
    
    AuthenticationRoutingModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthenticationModule {}
