import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarItem } from 'src/app/domain/interfaces/sidebar_model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor (public router:Router) { }

  sidebarItems: SidebarItem[] = [
    {
      icon: "./../../../assets/icons/dashboard.png",
      label: "Dashboard",
      route: "dashboard",
    },
    {
      icon: "./../../../assets/icons/employess.png",
      label: "Employees",
      route: "employees"
    },
    {
      icon: "./../../../assets/icons/pay_roll.png",
      label: "Payroll",
      route: "payroll"
    },
    {
      icon: "./../../../assets/icons/attendance.png",
      label: "Attendance",
      route: "attendance"
    },
    {
      icon: "./../../../assets/icons/leaves.png",
      label: "Leaves",
      route: "leaves",
    },
    {
      icon: "./../../../assets/icons/tickets.png",
      label: "Tickets",
      route: "tickets"
    },
    {
      icon: "./../../../assets/icons/performance.png",
      label: "Performance",
      route: "performance"
    },
    {
      icon: "./../../../assets/icons/policy.png",
      label: "Policies",
      route: "policies"
    }
  ];

  ngOnInit(): void {
    console.log(this.router.url);
  }

  redirectTo(item: SidebarItem) {
    if(item.children == undefined){
      this.router.navigateByUrl(item.route);
    }
  }
}
