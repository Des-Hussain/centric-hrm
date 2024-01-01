import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AttendanceConModel } from 'src/app/domain/interfaces/attendance_con_model';

@Component({
  selector: 'app-attendance-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attendance-container.component.html',
  styleUrls: ['./attendance-container.component.scss']
})
export class AttendanceContainerComponent {
  @Input() item: AttendanceConModel = {
    title: "",
    color: "./../../../../assets/icons/present.svg",
    icon: "",
    subTitle: "",
    action: ""
  };
  
}
