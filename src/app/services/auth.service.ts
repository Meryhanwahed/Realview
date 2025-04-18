import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://gradution-project-silk.vercel.app/users/register'; 

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, credentials);
  }
}
