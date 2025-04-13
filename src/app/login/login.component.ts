import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // تحقق من وجود التوكن
    const token = localStorage.getItem('token');
    if (token) {
      // إذا كان موجود، وجّه المستخدم مباشرة للصفحة الرئيسية
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    const body = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('https://gradution-project-silk.vercel.app/users/signin', body)
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        },
        error: () => {
          this.errorMessage = 'بيانات الدخول غير صحيحة. الرجاء المحاولة مجددًا.';
        }
      });
  }
}
