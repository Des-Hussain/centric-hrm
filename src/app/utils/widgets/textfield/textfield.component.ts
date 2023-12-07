import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textfield',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent {

  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() value: string = '';

  TextFieldComponent() { }

}
