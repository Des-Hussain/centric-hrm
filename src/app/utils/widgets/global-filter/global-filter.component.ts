import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalDropdownComponent } from "../global-dropdown/global-dropdown.component";

@Component({
    selector: 'app-global-filter',
    standalone: true,
    templateUrl: './global-filter.component.html',
    styleUrls: ['./global-filter.component.scss'],
    imports: [CommonModule, GlobalDropdownComponent]
})
export class GlobalFilterComponent {
  @Input() departmentFilter: string[] = ['All Employees', 'Marketing', 'Sales', 'Production', 'Networking'];
  @Input() active: string = 'All Employees';
  @Input() shipFilter: string[] = ['Morning', 'Evening', 'Night'];
}
