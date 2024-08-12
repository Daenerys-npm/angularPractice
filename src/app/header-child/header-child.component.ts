import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-child.component.html',
  styleUrl: './header-child.component.css',
})
export class HeaderChildComponent {
  @Input() data = '';

  item2 = 'This is from Child';

  @Output() changeHeaderEvent = new EventEmitter<string>();

  @Output() changeMyName = new EventEmitter<string>();
}
