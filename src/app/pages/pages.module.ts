import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { PayrollComponent } from './payroll/payroll.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeavesComponent } from './leaves/leaves.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    EmployeesComponent,
    PayrollComponent,
    AttendanceComponent,
    LeavesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
