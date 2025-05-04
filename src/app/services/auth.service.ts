import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'https://gradution-project-silk.vercel.app/users/register';
  private loginUrl = 'https://gradution-project-silk.vercel.app/users/signin';

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  register(userData: any): Observable<any> {
    return this.http.post(this.registerUrl, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<{ token: string; user: any }>(this.loginUrl, credentials).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.isLoggedInSubject.next(true); // ✅ تحديث الحالة
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLoggedInSubject.next(false); // ✅ تحديث الحالة
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
