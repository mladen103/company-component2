import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees : Employee[];

  constructor(
    private employeesService : EmployeesService
  ) { }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe((data : Employee[])=>{
      this.employees = data;
  })
  
  }
}
