import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public time;

  constructor(
    private employeesService : EmployeesService
  ) { }

  ngOnInit() {
    this.time = this.employeesService.getCurrentTime();
  }

}
