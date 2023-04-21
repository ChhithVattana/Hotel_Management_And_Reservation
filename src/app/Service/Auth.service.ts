import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
      .post('http://localhost:6969/oauth/token', body, this.httpOptions)
      .toPromise()
      .then((res: any) => {
        console.log(res);
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
        this.router.navigate(['/home']);
      });
  }
}
