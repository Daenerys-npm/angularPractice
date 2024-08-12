import { Component } from '@angular/core';
console.warn('Comp2 Loaded');

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css',
})
export class Comp2Component {}
