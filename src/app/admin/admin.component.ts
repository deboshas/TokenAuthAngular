import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orders: any[];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.getEmployee()
      .subscribe(response => {
        console.log(response);
      })

  }
}
