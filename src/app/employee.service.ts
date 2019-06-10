import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {


  }
  getEmployee() {
    let token = localStorage.getItem('token');
    let header: HttpHeaders = new HttpHeaders({ 'Authorization': 'Bearer' + token });
    return this.http.get<any>('api/employees', {
      headers: header
    });
  }


}
