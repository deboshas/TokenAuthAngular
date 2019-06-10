import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthguard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(router, state: RouterStateSnapshot) {

    if (this.authService.isLoggedIn() && this.authService.getCurrentUser().admin === true) return true;

    else
      this.router.navigate(['/no-access', { queryParams: { returnUrl: state.url } }]);
    return false;

  }
}
