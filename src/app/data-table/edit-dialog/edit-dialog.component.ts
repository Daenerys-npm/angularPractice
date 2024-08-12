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
import { DataTableItem } from '../data-table-datasource';

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.css',
})
export class EditDialogComponent {
  itemData: DataTableItem;
  // item = {
  //   id: 0,
  //   name: '',
  //   amount: 0,
  // };

  constructor(
    private editDialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public item: DataTableItem | null
  ) {
    // this.item = { ...data };
    this.itemData = item ? { ...item } : { id: 0, name: '', amount: 0 };
  }

  onEditSubmit() {
    // if (form.valid) {
    if (this.item) {
      this.editDialogForm.value.id = this.itemData.id.toString();
    }
    this.editDialogRef.close(this.editDialogForm.value);
    console.log('Values from Edit form');
    console.log(this.editDialogForm.value);
    //  }
  }

  onEditCancel() {
    console.log(this.editDialogForm.value);

    this.editDialogRef.close();
  }

  editDialogForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    amount: new FormControl('', [
      Validators.required,
      Validators.min(10),
      Validators.max(500),
    ]),
  });

  get id() {
    return this.editDialogForm.get('id');
  }

  get name() {
    return this.editDialogForm.get('name');
  }

  get amount() {
    return this.editDialogForm.get('amount');
  }
}
