import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-textfield',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-textfield.component.html',
  styleUrls: ['./search-textfield.component.scss']
})

export class SearchTextfieldComponent {
  
  @Input() placeholder: string = '';
  @Input() value: string = '';

}
