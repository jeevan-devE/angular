import { Component, OnInit } from '@angular/core';
import { Employee, EmployeesService } from './empoyees.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent  {

  employees: Employee[] = [];
 
    constructor(service: EmployeesService) {
        this.employees = service.getEmployees();
  
    }
}
