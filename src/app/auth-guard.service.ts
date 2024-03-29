import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(router, state: RouterStateSnapshot) {

    if (this.authService.isLoggedIn())
      return true;
    else
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });


  }
}
