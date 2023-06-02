import { Injectable } from '@angular/core';
import { AuthService } from './Auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGaurdService {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

  canAccess(): boolean {
    if (this.auth.checkAuthorities()) {
      return true;
    }
    return false
  }
}
