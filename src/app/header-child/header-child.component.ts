import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-child.component.html',
  styleUrl: './header-child.component.css',
})
export class HeaderChildComponent {
  @Input({ required: true }) data = '';

  @Input({ required: true }) data3 = '';

  item2 = 'This is from Child';

  @Output() changeHeaderEvent = new EventEmitter<string>();

  @Output() changeMyName = new EventEmitter<string>();

  @Output() enterFullName = new EventEmitter<string>();
}
