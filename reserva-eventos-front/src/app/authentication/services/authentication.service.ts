import { Injectable } from '@angular/core';
import { LoginRequest } from '../LoginRequest';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../LoginResponse';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from '../RegisterRequest';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly urlBase = 'http://localhost:8080/auth';
  constructor(private http: HttpClient) {}

  register(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.urlBase}/signup`, registerRequest);
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.urlBase}/login`, loginRequest)
      .pipe(
        tap((response: LoginResponse) => {
          this.saveToken(response.token, response.username);
        })
      );
  }
  private saveToken(token: string, username: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && localStorage) {
      return localStorage.getItem('token');
    } else {
      return null;
    }
  }
  getUsername(): string | null {
    if (typeof window !== 'undefined' && localStorage) {
      return localStorage.getItem('username');
    } else {
      return null;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
