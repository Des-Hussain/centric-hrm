import { Component } from '@angular/core';
import { AttendanceConModel } from 'src/app/domain/interfaces/attendance_con_model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
constructor () { }
attendanceContainer: AttendanceConModel[] = [
  {
title: "Present",
color: "#00D4E7",
icon: "./../../../assets/icons/present.svg",
subTitle: "Total Employees",
action: "employees"
  
  
  }
];

}
