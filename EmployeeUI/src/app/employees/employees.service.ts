import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs';
import { employees } from "../shared/employees";


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseUrl = 'https://localhost:7098/api';

  constructor(private http: HttpClient, private router: Router) { }

  CreateEmployee(values: any) {
    return this.http.post<employees>(this.baseUrl + '/Employee/', values).pipe(
      map(employee => {
        alert("Employee Created Successfully...!" + employee);
      })
    )
  }

  GetEmployee(){
    return this.http.get<employees>(this.baseUrl + '/Employee/')
  }
 
  GetEmployeeById(id:number){
    return this.http.get<employees>(this.baseUrl + '/Employee/'+ id)
  }
 
  UpdateEmployee(values:any){
 
    return this.http.put<employees>(this.baseUrl + '/Employee/', values).pipe(
      map(emp=>{
        alert("Employee Updated Successfully...!" + emp);
      })
    )
  }
  RemoveEmployee(id:number){
    return this.http.delete(this.baseUrl + '/Employee/' + id);
 
  }
}

