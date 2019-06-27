import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http : HttpClient) { }

   getEmployees(){
    return this.http.get("http://localhost:4200/assets/json/employees.json");
  }

}
