import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AppRoutes } from '../utils/resources/routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { PayrollComponent } from './payroll/payroll.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeavesComponent } from './leaves/leaves.component';
import { TicketsComponent } from './tickets/tickets.component';
import { PerformanceComponent } from './performance/performance.component';
import { PoliciesComponent } from './policies/policies.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: AppRoutes.dashboard,
        pathMatch: 'full'
      },
      {
        path: AppRoutes.dashboard,
        component: DashboardComponent
      },
      {
        path: AppRoutes.employees,
        component: EmployeesComponent
      },
          {
        path: AppRoutes.payroll,
        component: PayrollComponent
          },
          {
        path: AppRoutes.attendance,
        component: AttendanceComponent
          },
          {
        path: AppRoutes.leaves,
        component: LeavesComponent
          },
          {
        path: AppRoutes.tickets,
        component: TicketsComponent
          },
          {
        path: AppRoutes.performance,
        component: PerformanceComponent
          },
          {
        path: AppRoutes.policies,
        component: PoliciesComponent
            
          }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
