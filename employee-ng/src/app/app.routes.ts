import { Routes } from '@angular/router';
import { EmployeeListComponent } from './home/employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './home/employee/employee-form/employee-form.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/employees',
        pathMatch: 'full'
    },
    {
        path: 'employees',
        component: EmployeeListComponent
        
    },
    {
        path: 'employees/employee-form',
        component: EmployeeFormComponent
    },
    {
        path: 'employees/employee-form/:id',
        component: EmployeeFormComponent
    }
];
