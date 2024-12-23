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

  ngOnInit(): void {
    let id = 0;
    this.route.params.subscribe(params => {
      id = params['id'];
      if(id) {
        this.employeeService.getEmployeeById(id)
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
