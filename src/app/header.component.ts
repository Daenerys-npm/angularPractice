import { Component, Input, input, Output } from '@angular/core';
import { HeaderChildComponent } from './header-child/header-child.component';
import { CommonModule } from '@angular/common';

console.warn('Header Component Loaded');

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderChildComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() data2 = '';
  item = 'THis is from Header-Parent ';

  newname = '';

  updateHeader(name: string) {
    console.log(name);
    this.newname = name;
  }

  updateMyName(myName: string) {
    console.log(myName);
    this.newname = this.newname + myName;
  }
}
