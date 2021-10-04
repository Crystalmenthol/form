import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employeeModel';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  employees: Employee[] = [
    {
      id: 1,
      name: 'wut',
      task: 'code',
      workingHour: '8'
    },
    {
      id: 2,
      name: 'john',
      task: 'test',
      workingHour: '8'
    },
    {
      id: 3,
      name: 'jay',
      task: 'ux',
      workingHour: '8'
    },
    {
      id: 4,
      name: 'em',
      task: 'ui',
      workingHour: '8'
    },
    {
      id: 5,
      name: 'best',
      task: 'code',
      workingHour: '8'
    },
  ]
  showEmp: Employee[] = this.employees;

  constructor() { }

  check(value: string): void {
    value? this.showEmp = this.employees.filter(employee => employee.name == value) : this.showEmp = this.employees;
  }
  
}
