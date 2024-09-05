import { Component, computed, signal } from '@angular/core';

import {
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { using } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrl: './rform.component.css',
})
export class RformComponent {
  newForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.newForm = this.fb.group({
      uName: [
        '',
        [Validators.required, this.checkNoSpace],
        //, this.stringValidator(/bob/i)
      ],
      uDate: [new Date(), Validators.required],
      uAmount: [
        '',
        [Validators.required, Validators.min(10), Validators.max(80)],
      ],
      uAge: ['', Validators.required],
      uEmail: ['', [Validators.email, Validators.required]],
      uState: ['', Validators.required],
    });
  }

  today = new Date().toISOString().split('T')[0];

  uSignal = signal('Sakshi');

  isSpecial = true;

  displayName = computed(() => 'This is my Name' + this.uSignal);

  onSubmitHandler() {
    console.log('Submitted');
    console.log(this.newForm.value);
    console.log(this.newForm);
    console.log(this.uName?.errors);
    this.uSignal.set('Sangita');
    console.log(this.uDate?.value);
    console.log(this.today + typeof this.today);
  }

  //Validator to check no space in input
  checkNoSpace(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { isSpacePresent: true };
    }
    return null;
  }

  //Validator to check no Symbols in input
  LetterValidator(control: AbstractControl): { [key: string]: any } | null {
    if (!control.value) {
      return null;
    }
    const reg = new RegExp('^[a-zA-Z]+$ ');
    return reg.test(control.value) ? null : { invalidCharacters: true };
  }

  //Validator to check no forbidden String in input
  stringValidator(nameStr: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const Forbid = nameStr.test(control.value);
      return Forbid ? { ForbiddenNamePresent: true } : null;
    };
  }

  birthDateValidator(): ValidatorFn {
    const today = new Date();
    return (control: AbstractControl): ValidationErrors | null => {
      const pDate = new Date(control.value);
      const check = pDate.getTime() > today.setHours(0, 0, 0, 0);
      return check ? { dateInvalid: true } : null;
    };
  }

  birthDateValidator2(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const inputValue = control.value;

      if (!inputValue) {
        return null; // Return null if the input is empty (no validation error)
      }

      const dateValue = new Date(inputValue);
      const today = new Date();

      // Check if the date is valid and not in the future
      if (isNaN(dateValue.getTime())) {
        return { invalidDate: 'The date is not valid' };
      } else if (dateValue > today) {
        return { futureDate: 'The date cannot be in the future' };
      }

      return null; // Return null if the validation passes (no error)
    };
  }

  get uName() {
    return this.newForm.get('uName');
  }

  get uDate() {
    return this.newForm.get('uDate');
  }

  get uAmount() {
    return this.newForm.get('uAmount');
  }

  get uAge() {
    return this.newForm.get('uAge');
  }

  get uEmail() {
    return this.newForm.get('uEmail');
  }

  get uState() {
    return this.newForm.get('uState');
  }
}
