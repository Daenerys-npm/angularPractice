import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { UserFormComponent } from './userForm.component';

console.warn('App Component Loaded');

@Component({
  selector: 'app-root',
  // standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports:[HeaderComponent, UserFormComponent,RouterOutlet, RouterLink ]
})
export class AppComponent {
  title = 'new-prac';

  item = 'This is from AppComponent';
}
