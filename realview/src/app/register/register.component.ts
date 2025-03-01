import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Fixes *ngIf issue

@Component({
  selector: 'app-register',
   standalone: true,
   imports: [CommonModule, ReactiveFormsModule, RouterModule], // ✅ Add required modules
   templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  // Custom Validator: Check if Passwords Match
  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value 
      ? null : { mismatch: true };
  }

  // Getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
   if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.router.navigate(['/login']); // ✅ Redirect after successful registration
    }

    // Simulate API Call (You can replace this with a real HTTP request)
    console.log('User Registered:', this.registerForm.value);

    // Redirect to Login Page After Successful Registration
    alert('Registration Successful! Redirecting to login...');
    this.router.navigate(['/login']);
  }
}
