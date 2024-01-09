import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global-search-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-search-field.component.html',
  styleUrls: ['./global-search-field.component.scss']
})
export class GlobalSearchFieldComponent {
  @Input() placeholder: string = '';
  @Input() icon?: string|null;
  @Input() type: string = 'text';
  @Input() value: string = '';

  TextFieldComponent() { }
}