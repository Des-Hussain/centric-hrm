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
import { TicketsComponent } from './tickets/tickets.component';
import { PerformanceComponent } from './performance/performance.component';
import { PoliciesComponent } from './policies/policies.component';
import { AttendanceContainerComponent } from "../utils/widgets/attendance-container/attendance-container.component";
import { EmployeeCardComponent } from './employees/employee-card/employee-card.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        EmployeesComponent,
        PayrollComponent,
        AttendanceComponent,
        LeavesComponent,
        TicketsComponent,
        PerformanceComponent,
        PoliciesComponent,
        EmployeeCardComponent,
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ComponentsModule,
        AttendanceContainerComponent
    ]
})
export class PagesModule { }
