import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details-sidebar.component.html',
  styleUrls: ['./employee-details-sidebar.component.scss']
})
export class EmployeeDetailsSidebarComponent {
  @Input() showSideBar: boolean = false;
  @Output() closeSideBar = new EventEmitter<any>();

  constructor() { }

  closeRightSideBar() {
    this.closeSideBar.emit();
  }
}
