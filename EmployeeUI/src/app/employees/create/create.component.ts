import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EmployeesService } from "../employees.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  title: string = 'Employee Registeration Form';
  
  EmpForm = new FormGroup({
    id: new FormControl('', Validators.required),
    employee_info: new FormControl('', Validators.required)

  });
  constructor(private employeeService: EmployeesService, private router: Router) { }

  onSubmit() {
    this.employeeService.CreateEmployee(this.EmpForm.value).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: () => alert("Please check ...!")
    })

  }
}



