import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class AuthService {
  token: string;
  constructor(private http: HttpClient, private route: Router, private jwtHelperService: JwtHelperService) {

  }

  login(credentials) {
    return this.http.post<any>('/api/authenticate', JSON.stringify(credentials))
      .pipe((map(response => {
        console.log(response);
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          return true;
        }

        else {

          return false;
        }
      })));


  }

  logout() {
    localStorage.removeItem('token');
    //this.route.navigate(['/']);
  }

  getCurrentUser() {
    let token = localStorage.getItem('token');
    if (token) {
      let user = this.jwtHelperService.decodeToken(token);
      return user;
    }
    else
      return null;

  }

  isLoggedIn() {

    let token = localStorage.getItem('token');
    if (token) {
      let isExpired = this.jwtHelperService.isTokenExpired(token);
      return isExpired;
    }
    else
      return false;

  }

}

