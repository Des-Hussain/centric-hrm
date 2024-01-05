import { Component } from '@angular/core';
import { AttendanceConModel } from 'src/app/domain/interfaces/attendance_con_model';
import { EmployeeDataModel } from 'src/app/domain/interfaces/employee_card_model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

   name: string = "Abdul Moiz";
   mail: string = "ali.naqi@centrictech.com";

   data:  EmployeeDataModel = {
      name: "Abdul Moiz",
      mail: "ali.naqi@centrictech.com",
      department: "App Department",
      
      id:"#09834",
      phone: "+92 334 3241741",
      picture: "./../../../assets/img/portrait.jpg",
      active: false,
      isSelected: false,
      designation: "Social Media Marketing Executive"

   };

   employeeList: EmployeeDataModel[] = [
    {
      name: "Abdul Moiz",
      mail: "ali.naqi@centrictech.com",
      department: "App Department",
      id: "#09834",
      phone: "+92 334 3241741",
      picture: "./../../../assets/img/portrait.jpg",
      active: false,
      isSelected: false,
      designation: "Social Media Marketing Executive"
    },
    {
      name: "John Doe",
      mail: "john.doe@example.com",
      department: "Marketing",
      id: "#12345",
      phone: "+1 234 567890",
      picture: "./../../../assets/icons/john.svg",
      active: true,
      isSelected: false,
      designation: "Marketing Manager"
    },
    {
      name: "Jane Smith",
      mail: "jane.smith@example.com",
      department: "Sales",
      id: "#67890",
      phone: "+1 987 654321",
      picture: "./../../../assets/img/portrait.jpg",
      active: true,
      isSelected: false,
      designation: "Sales Executive"
    },
    {
      name: "Abdul Moiz",
      mail: "ali.naqi@centrictech.com",
      department: "App Department",
      id: "#09834",
      phone: "+92 334 3241741",
      picture: "./../../../assets/img/portrait.jpg",
      active: false,
      isSelected: false,
      designation: "Social Media Marketing Executive"
    },
    {
      name: "John Doe",
      mail: "john.doe@example.com",
      department: "Marketing",
      id: "#12345",
      phone: "+1 234 567890",
      picture: "./../../../assets/icons/john.svg",
      active: true,
      isSelected: false,
      designation: "Marketing Manager"
    },
    {
      name: "Jane Smith",
      mail: "jane.smith@example.com",
      department: "Sales",
      id: "#67890",
      phone: "+1 987 654321",
      picture: "./../../../assets/img/portrait.jpg",
      active: true,
      isSelected: false,
      designation: "Sales Executive"
    },
    {
      name: "Emma Watson",
      mail: "emma.watson@example.com",
      department: "HR",
      id: "#45678",
      phone: "+1 345 678912",
      picture: "./../../../assets/img/portrait.jpg",
      active: false,
      isSelected: false,
      designation: "HR Manager"
    }
   ,{
    name: "Muhammad Saqib",
    mail: "muhammad.saqib@centrictech.com",
    department: "App Department",
    id:"#09834",
    phone: "+92 313 2014027",
    picture: "./../../../assets/img/portrait.jpg",
    active: false,
    isSelected: false,
    designation: "Senior Ui/Ux Designer"

 },
  ];

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
