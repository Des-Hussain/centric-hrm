import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDataModel } from 'src/app/domain/interfaces/employee_card_model';

@Component({
  selector: 'app-employee-sidebar-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-sidebar-card.component.html',
  styleUrls: ['./employee-sidebar-card.component.scss']
})
export class EmployeeSidebarCardComponent {


  @Input() employeeData?: EmployeeDataModel;
}
