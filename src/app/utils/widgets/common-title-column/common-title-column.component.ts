import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-title-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-title-column.component.html',
  styleUrls: ['./common-title-column.component.scss']
})
export class CommonTitleColumnComponent {
@Input() title: string = "";
@Input() value: string = "";
}
