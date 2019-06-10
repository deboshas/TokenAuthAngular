import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private activateRoute: ActivatedRoute) {


  }

  signIn(credentials) {

    this.authService.login(credentials)
      .subscribe(returnval => {
        if (returnval === true) {
          let returnUrl = this.activateRoute.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/home']);
        }

        else {
          this.invalidLogin = true;
        }
      })



  }

}
