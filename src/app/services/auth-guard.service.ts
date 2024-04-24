import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated() === null) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
