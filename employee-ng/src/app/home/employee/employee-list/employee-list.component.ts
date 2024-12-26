import { Component, inject} from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../ds/employee';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employeeService: EmployeeService = inject(EmployeeService)
  $employees:Observable<Employee[]> = this.employeeService.getAllEmployee();
  router:Router = inject(Router);

  findEmployee(id:number) {
    this.router.navigate([`/employees/employee-form`, id] )
  }

  deleteEmployee(id:number) {
    this.employeeService.deleteEmployee(id)
    .subscribe(
      {
        complete: () => this.$employees = this.employeeService.getAllEmployee()
        // up to date info but not to refresh the page
      }
    );
  }
}
