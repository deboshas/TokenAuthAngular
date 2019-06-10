import { Component, OnInit, DoBootstrap } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit, DoBootstrap {

  constructor() { }

  ngOnInit() {
  }
  // added in angular 7 
  ngDoBootstrap() {

  }

}
