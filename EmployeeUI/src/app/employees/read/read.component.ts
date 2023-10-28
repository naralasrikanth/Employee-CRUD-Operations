import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';
import {FormControl , FormGroup, Validators  } from "@angular/forms";
import { employees } from 'src/app/shared/employees';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent  {
  employee?: any;
  constructor(private employeeServices: EmployeesService, private router: ActivatedRoute) { }

  

  ngOnInit(): void {
    this.loadEmployee();
  }

  loadEmployee() {
    this.employeeServices.GetEmployee().subscribe({
      next: emp => this.employee = emp,
      error: error => alert(error)
    });
  }

  // Method to stringify the employee_info property
  stringifyEmployeeInfo(employeeInfo: JSON): string {
    return JSON.stringify(employeeInfo);
}

}

