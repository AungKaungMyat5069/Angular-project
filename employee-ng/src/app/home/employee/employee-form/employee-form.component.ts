import { Component, inject, OnInit } from '@angular/core';
import { Employee } from '../ds/employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit{

  employeeService:EmployeeService = inject(EmployeeService);
  router:Router = inject(Router);
  route:ActivatedRoute = inject(ActivatedRoute);
  employee:Employee  = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    hireDate: new Date(),
    salary: 0
  }
  id!:number;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id) {
        this.employeeService.getEmployeeById(this.id)
        .subscribe(
          {
            next: data => this.employee = data,
            error: e => console.log(e),
            complete: () => console.log('Employee fetched successfully')
          }
        )
      }
    })
    
  }

  createEmployee(emp:Employee) {
    if(this.id) {
      this.employeeService.updateEmployee(emp, this.id)
      .subscribe(
        {
          next: data => console.log(emp, this.id),
          error: e => console.log(e),
          complete: () => {
            this.router.navigate(['/employees'])
          }          
        }
      )
    } else {
      this.employeeService.saveEmployee(emp)
      .subscribe(
        {
          next: data => console.log(data),
          error: e => console.log(e),
          complete: () => {
            this.router.navigate(['/employees'])
          }
        }
      )
    }
  }
}
