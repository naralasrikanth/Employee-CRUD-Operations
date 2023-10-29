import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from "./employees-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
//import { CreateComponent } from './create/create.component';
//import { ReadComponent } from "./read/read.component";


@NgModule({
  declarations: [
    //ReadComponent
   
  
   // CreateComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
