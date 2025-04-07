// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      nationalId: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      usertype: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed', error);
        this.errorMessage = error.error.message || 'Registration failed. Please try again.';
      }
    });
  }
}
