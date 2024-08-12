import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

console.warn('userForm Component Loaded');

@Component({
  selector: 'app-userForm',
  // standalone:true,
  // imports:[ReactiveFormsModule, CommonModule],
  templateUrl: './userForm.component.html',
  styleUrl: './userForm.component.css',
})
export class UserFormComponent {
  // username = new FormControl('');
  // password = new FormControl('');

  LoginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    age: new FormControl('', [Validators.min(13), Validators.max(50)]),
  });

  printfunc() {
    console.log(this.LoginForm.value);
  }

  get username() {
    return this.LoginForm.get('username');
  }

  get password() {
    return this.LoginForm.get('password');
  }

  get age() {
    return this.LoginForm.get('age');
  }
}
