import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileForm!: FormGroup;
  apiUrl = 'https://gradution-project-silk.vercel.app/users'; // رابط الباك اند
  userId = ''; // يجب أن تضبط هذا حسب الـ token أو من localStorage

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.userId = this.getUserId(); // جلب ID المستخدم
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      nationalId: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      userType: ['', Validators.required],
      address: ['', Validators.required]
    });

    this.loadUserData();
  }

  getUserId(): string {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user)._id : '';
  }

  loadUserData(): void {
    this.http.get(`${this.apiUrl}/${this.userId}`).subscribe((data: any) => {
      this.profileForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.http.put(`${this.apiUrl}/${this.userId}`, this.profileForm.value).subscribe({
        next: (res) => alert('تم تحديث البيانات بنجاح'),
        error: (err) => alert('حدث خطأ أثناء التحديث')
      });
    }
  }
}
