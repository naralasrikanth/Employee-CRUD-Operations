import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesService } from "../employees.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  employee?: any;
  id?: any;

  title: string = 'updating the Employee';
  EmpForm = new FormGroup({
    id: new FormControl('', Validators.required),
    employee_info: new FormControl('', Validators.required)

  });
  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee() {

    if (this.id) this.employeeService.GetEmployeeById(this.id).subscribe({
      next: emp => this.employee = emp,
      error: error => alert(error)
    });
  }

  onSubmit() {
    this.employeeService.UpdateEmployee(this.EmpForm.value).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: () => alert("Please check ...!")
    })

  }

}
