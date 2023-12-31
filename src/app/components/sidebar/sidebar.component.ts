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
      icon: "./../../../assets/icons/dashboard.svg",
      label: "Dashboard",
      route: "dashboard",
    },
    {
      icon: "./../../../assets/icons/vendor.svg",
      label: "Employees",
      route: "employees"
    },
    {
      icon: "./../../../assets/icons/handyman.svg",
      label: "Payroll",
      route: "payroll"
    },
    {
      icon: "./../../../assets/icons/users.svg",
      label: "Attendance",
      route: "attendance"
    },
    {
      icon: "./../../../assets/icons/appointments.svg",
      label: "Leaves",
      route: "leaves",
    },
    {
      icon: "./../../../assets/icons/vendor_request.svg",
      label: "Tickets",
      route: "tickets"
    },
    {
      icon: "./../../../assets/icons/add_vehicle.svg",
      label: "Performance",
      route: "performance"
    },
    {
      icon: "./../../../assets/icons/marketing.svg",
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
