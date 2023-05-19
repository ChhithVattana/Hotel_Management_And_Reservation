import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

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
      .post('http://18.138.248.92:6969/oauth/token', body, this.httpOptions)
      .toPromise()
      .then((res: any) => {
        console.log(res);
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
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
}
