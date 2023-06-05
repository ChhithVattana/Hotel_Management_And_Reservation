import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginModel } from '../Model/Login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic VmF0dGFuYTpTZXl5',
    }),
    body: null,
    params: new HttpParams(),
  };

  async webClient() {
    localStorage.removeItem('access_token');
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', 'admin');
    body.set('password', 'admin');
    await this.http
      .post('https://m1g7.seyna.iteg7.com/oauth/token', body, this.httpOptions)
      .toPromise()
      .then((res: any) => {
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
      });
  }

  async login(loginModel: LoginModel) {
    localStorage.removeItem('access_token');
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', loginModel.username);
    body.set('password', loginModel.password);
    await this.http
      .post('https://m1g7.seyna.iteg7.com/oauth/token', body, this.httpOptions)
      .toPromise()
      .then((res: any) => {
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
        this.router.navigate(['/admin/allrooms']);
      });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    if (!token) {
      return false;
    }

    const decodedToken = jwt_decode(token) as { exp: number };
    const currentTime = Date.now() / 1000; // convert to Unix timestamp format

    return decodedToken.exp > currentTime;
  }

  // Assuming you have a method to check authorities for access control
  checkAuthorities(): boolean {
    const token = localStorage.getItem('access_token');
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token!!);
    // Check if the user has a specific authority/role
    return decodedToken.authorities.includes('PRIVILEGE_ADMIN');
  }
}
