import { Component, Input } from '@angular/core';
import { EmployeeDataModel } from 'src/app/domain/interfaces/employee_card_model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {

  @Input() data : EmployeeDataModel = {
    name: "",
    mail: "",
    department: "",
    id: "",
    phone: "",
    picture: "",
    active: false,
    isSelected: false,
    designation: ""
  } ;

}
