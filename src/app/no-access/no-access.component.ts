import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-no-access',
  templateUrl: './no-access.component.html',
  styleUrls: ['./no-access.component.css']
})
export class NoAccessComponent implements OnInit {
  returnUrl;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl');

  }
  back() {
    this.router.navigate([this.returnUrl || '/home']);
  }

  ngOnInit() {
  }

}
