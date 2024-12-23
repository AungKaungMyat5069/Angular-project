import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../ds/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  EMPLOYEE_API_BACKEND_URL = "http://localhost:8080/api/employee"

  constructor(private http: HttpClient) { }

  getAllEmployee():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.EMPLOYEE_API_BACKEND_URL + '/all')
  }

  saveEmployee(emp:Partial<Employee>):Observable<Employee> {
    const header = new HttpHeaders();
    header.set("Content-Type", "application/json");// Important : Do not forget this media format
    return this.http.post<Employee>(`${this.EMPLOYEE_API_BACKEND_URL}/all`, emp, {headers: header})
  }

  getEmployeeById(id:number):Observable<Employee> {
    return this.http.get<Employee>(`${this.EMPLOYEE_API_BACKEND_URL}/${id}`)
  }
}
