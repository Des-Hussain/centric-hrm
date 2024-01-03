import { Component } from '@angular/core';
import { AttendanceConModel } from 'src/app/domain/interfaces/attendance_con_model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

   name: string = "Abdul Moiz";

  attendanceContainer: AttendanceConModel[] = [
       {
     title: "Total Employees",
     color: "#00D4E7",
     icon: "./../../../../assets/icons/total_employees.svg",
     subTitle: "2",
     action: "none"
   },
    {
     title: "New Employees",
     color: "#00D4E7",
     icon: "./../../../../assets/icons/present.svg",
     subTitle: "52",
     action: "none"
   },
   {
     title: "On Time",
     color: "#FF5C58",
     icon: "./../../../../assets/icons/absent.svg",
     subTitle: "12",
     action: "none"
   },
   {
     title: "Late",
     color: "#FFB800",
     icon: "./../../../../assets/icons/hourglass.svg",
     subTitle: "4",
     action: "none"
   },
   {
     title: "Absent",
     color: "#FFB800",
     icon: "./../../../../assets/icons/hourglass.svg",
     subTitle: "4",
     action: "none"
   },
   {
    title: "Leave",
    color: "#9BA5B7",
    icon: "./../../../../assets/icons/total_employees.svg",
    subTitle: "2",
    action: "none"
  },

  
 
 
 ];
}
