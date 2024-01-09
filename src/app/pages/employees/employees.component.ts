import { Component } from '@angular/core';
import { AttendanceConModel } from 'src/app/domain/interfaces/attendance_con_model';
import { EmployeeDataModel } from 'src/app/domain/interfaces/employee_card_model';
import { EmployeePersonalDataModel } from 'src/app/domain/interfaces/employee_personal_data_model';
import {  EmployeeSalaryModel } from 'src/app/domain/interfaces/employee_salary_model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

   name: string = "Abdul Moiz";
   mail: string = "ali.naqi@centrictech.com";

   data?:  EmployeeDataModel;
  //   = {
  //     name: "Abdul Moiz",
  //     mail: "ali.naqi@centrictech.com",
  //     department: "App Department",
      
  //     id:"#09834",
  //     phone: "+92 334 3241741",
  //     picture: "./../../../assets/img/portrait.jpg",
  //     active: false,
  //     isSelected: false,
  //     designation: "Social Media Marketing Executive"

  //  };
   showSideBar: boolean = true;

   onTap(value: EmployeeDataModel){
    this.data = value;
    this.showSideBar = true;
  }
  tabs = [
    { id: 'details', name: 'Details' },
    { id: 'payrool', name: 'Payroll' },
    { id: 'documents', name: 'Documents' },
    // Add more tabs as needed
  ];
  
  activeTab = 1;
  salary = 20000;
  onTabClick(index: number) {
    this.activeTab = index;
  }
   
  employeePersonalDataModel: EmployeePersonalDataModel = {
    
      fullName: "MADNI RAZA",
      fatherName: "MUHAMMAD HAROON",
      gender: "MALE",
      education: "Undergraduate",
      martialStatus: "Single",
      address: "Gulzar E Hijri",
      contact: "1331123",
      emergencyContact: "213213",
      guid: 2,
      email: "madni.raza2015@hotmail.com",
      jobTitle: "ASP.NET Developer",
      employmentType: "Full Time",
      department: "Designing",
      appointmentDate: "01-01-2024",
      reporting: "MADNI RAZA",
      skills: "dadsdsasd",
      picturePath: "string",
      isActive: true
    };
  
    tableHeading: string[] = [
      "Month","Basic Salary","Allowances","Deductions","Net Salary","Status"
    ];

    tableData : EmployeeSalaryModel[]= [
       
      {
        payroolId: 1,
        month: "January",
        basicSalary: 20000,
        allowances: 20000,
        deductions: 20000,
        netSalary: 20000,
        Status: "Pending"
      },
      {
        payroolId: 1,
        month: "January",
        basicSalary: 20000,
        allowances: 20000,
        deductions: 20000,
        netSalary: 20000,
        Status: "Pending"
      },
      {
        payroolId: 1,
        month: "January",
        basicSalary: 20000,
        allowances: 20000,
        deductions: 20000,
        netSalary: 20000,
        Status: "Pending"
      },
      {
        payroolId: 1,
        month: "January",
        basicSalary: 20000,
        allowances: 20000,
        deductions: 20000,
        netSalary: 20000,
        Status: "Pending"
      },
      {
        payroolId: 1,
        month: "January",
        basicSalary: 20000,
        allowances: 20000,
        deductions: 20000,
        netSalary: 20000,
        Status: "Pending"
      },
      {
        payroolId: 1,
        month: "January",
        basicSalary: 20000,
        allowances: 20000,
        deductions: 20000,
        netSalary: 20000,
        Status: "Pending"
      },
      {
        payroolId: 1,
        month: "January",
        basicSalary: 20000,
        allowances: 20000,
        deductions: 20000,
        netSalary: 20000,
        Status: "Pending"
      },
      {
        payroolId: 1,
        month: "January",
        basicSalary: 20000,
        allowances: 20000,
        deductions: 20000,
        netSalary: 20000,
        Status: "Pending"
      }
    ];

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
