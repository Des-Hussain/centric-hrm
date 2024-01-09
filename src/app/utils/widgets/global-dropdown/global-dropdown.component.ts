import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-dropdown.component.html',
  styleUrls: ['./global-dropdown.component.scss']
})
export class GlobalDropdownComponent {
  
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();
  @Input() options: string[] = [];

  constructor(private elementRef: ElementRef) {}
  
  selected: string = 'Option';
  open: boolean = false;

  onSelection(value: string){
    this.selected = value;
    this.open = false;
    this.onSelect.emit(value);
  }

  onTap(){
    this.open = !this.open;
    console.log(this.open);
  }

  @HostListener('document:mousedown', ['$event'])
  onClickOutSide(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.open = false;
    }
  }
}
