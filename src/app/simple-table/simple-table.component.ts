import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  amount: string;
}

const ELEMENT_DATA: UserData[] = [
  { id: '1', name: 'John Doe', amount: '20' },
  { id: '2', name: 'Jane Smith', amount: '30' },
  { id: '3', name: 'Bob Johnson', amount: '40' },
  { id: '4', name: 'Beryllium', amount: '50' },
  { id: '5', name: 'Boron', amount: '60' },
  { id: '6', name: 'Carbon', amount: '60' },
  { id: '7', name: 'Nitrogen', amount: '60' },
  { id: '8', name: 'Oxygen', amount: '60' },
  { id: '9', name: 'Fluorine', amount: '60' },
];

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrl: './simple-table.component.css',
})
export class SimpleTableComponent implements OnInit {
  displayedColumns = ['id', 'name', 'amount'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  filterControl = new FormControl('');

  ngOnInit(): void {
    this.filterControl.valueChanges.subscribe((searchText) => {
      this.dataSource.filter = searchText!.trim().toLowerCase();
    });

    this.dataSource.filterPredicate = (data: UserData, filter: string) => {
      return (
        data.name.toLowerCase().includes(filter) ||
        data.id.toLowerCase().includes(filter) ||
        data.amount.toLowerCase().includes(filter)
      );
    };
  }
}
