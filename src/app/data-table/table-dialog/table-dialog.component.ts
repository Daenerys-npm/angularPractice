import { Component, Inject } from '@angular/core';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-table-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './table-dialog.component.html',
  styleUrl: './table-dialog.component.css',
})
export class TableDialogComponent {
  // item = {
  //   id: 0,
  //   name: '',
  //   amount: 0,
  // };

  constructor(private dialogRef: MatDialogRef<TableDialogComponent>) {}

  onSubmit() {
    // if (form.valid) {
    this.dialogRef.close(this.DialogForm.value);
    console.log(this.DialogForm.value);
    //  }
  }

  onCancel() {
    console.log(this.DialogForm.value);

    this.dialogRef.close();
  }

  DialogForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.min(1)]),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    amount: new FormControl('', [Validators.min(10), Validators.max(500)]),
  });

  get id() {
    return this.DialogForm.get('id');
  }

  get name() {
    return this.DialogForm.get('name');
  }

  get amount() {
    return this.DialogForm.get('amount');
  }
}
