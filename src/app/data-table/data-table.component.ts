import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';
import { TableDialogComponent } from './table-dialog/table-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { reportUnhandledError } from 'rxjs/internal/util/reportUnhandledError';
import { FormControl } from '@angular/forms';
//import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  dataSource = new DataTableDataSource();

  // private dialogRef: MatDialogRef<TableDialogComponent> | null = null;

  private editDialogRef: MatDialogRef<EditDialogComponent> | null = null;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'amount', 'delete', 'edit'];

  constructor(
    private dialog: MatDialog // private changeDetectorRefs: ChangeDetectorRef
  ) {
    this.dataSource = new DataTableDataSource();
  }

  ngOnInit(): void {
    // this.dataSource.filterPredicate = function (
    //   dataNew: DataTableItem,
    //   filter: string
    // ) {
    //   const dataStr = dataNew.name.toLowerCase();
    //   return dataStr.indexOf(filter) != -1;
    // };

    this.searchControl.valueChanges.subscribe((searchText) => {
      this.searchFunction(searchText);
      //this.applyFilter(searchText);
    });

    //
    //Using Filter Predicate-
  }

  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim().toLowerCase(); // Remove whitespace and convert to lowercase
  //   this.dataSource.filter = filterValue;
  // }

  searchFunction(filterVal: string): void {
    filterVal = filterVal.trim().toLowerCase();

    if (!filterVal) {
      console.log('Empty Search');
      this.dataSource.data = this.Unfiltered;
      console.log(this.dataSource.data);
    } else {
      console.log(this.filteredItems);
      this.dataSource.data = this.Unfiltered;
      this.filteredItems = this.dataSource.data.filter(
        (i) =>
          i.name.toLowerCase().includes(filterVal) ||
          i.id.toString().toLowerCase().includes(filterVal)
      );

      console.log(this.filteredItems);
      this.dataSource.data = this.filteredItems;
    }

    this.paginator._changePageSize(this.paginator.pageSize);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  searchControl: FormControl = new FormControl('');

  filteredItems: DataTableItem[] = this.dataSource.data;

  Unfiltered: DataTableItem[] = this.dataSource.data;

  // openAddItemDialog() {
  //   if (!this.dialogRef) {
  //     //const dialogRef
  //     this.dialogRef = this.dialog.open(TableDialogComponent, {
  //       width: '400px',
  //       position: { top: '50px' },
  //     });

  //     this.dialogRef.afterClosed().subscribe((result) => {
  //       this.dialogRef = null;

  //       if (result) {
  //         this.addItem(result);
  //         //this.refresh();
  //       }
  //     });
  //   }
  // }

  //search

  addNewEntry() {
    this.openEditItemDialog(null);
  }

  editOldEntry(item: DataTableItem | null) {
    this.openEditItemDialog(item);
  }

  openEditItemDialog(item: DataTableItem | null): void {
    if (!this.editDialogRef) {
      //const dialogRef
      this.editDialogRef = this.dialog.open(EditDialogComponent, {
        width: '400px',
        position: { top: '50px' },
        data: item,
      });

      this.editDialogRef.afterClosed().subscribe((result: DataTableItem) => {
        this.editDialogRef = null;
        if (result) {
          if (item !== null) {
            console.log('Result :' + result);
            this.editItem(result);
          } else {
            this.addItem(result);
          }

          //this.refresh();
        }
      });
    }
  }

  removeItem(delItem: DataTableItem) {
    console.log(delItem);
    this.deleteItem(delItem);
    //this.refresh();
  }

  editItem(edItem: DataTableItem) {
    console.log(edItem);

    //this.changeItem(edItem);
    // this.dataSource.data.map((item) => {
    //   if (item.id == Number(edItem.id)) {
    //     item.name = edItem.name;
    //     item.amount = edItem.amount;
    //     console.log(edItem.id);
    //   }
    // });

    this.dataSource.data = this.dataSource.data.map((item) =>
      item.id === Number(edItem.id) ? edItem : item
    );

    this.Unfiltered = this.dataSource.data;
    this.paginator._changePageSize(this.paginator.pageSize);
  }

  addItem(item: DataTableItem) {
    //this.data.push(item);
    const newData = [...this.dataSource.data, item];
    this.dataSource.data = newData;

    this.Unfiltered = this.dataSource.data;
    this.paginator._changePageSize(this.paginator.pageSize); // will refelct the change as all elements under pagesize are displayed
  }

  deleteItem(item: DataTableItem) {
    const currentData = this.dataSource.data;
    const UpdatedData = currentData.filter((i) => i.id !== item.id);
    this.dataSource.data = UpdatedData;

    this.paginator._changePageSize(this.paginator.pageSize);
  }

  // changeItem(updateitem: DataTableItem) {
  //   console.log('In Change Item');

  // const index = this.dataSource.data.findIndex(
  //   (i) => i.id === Number(updateitem.id)
  // );
  // console.log(index + 'This is found index');
  // if (index !== -1) {
  //   this.dataSource.data[index] = updateitem;
  // }

  // const index = this.dataSource.data.findIndex((i) => i.id === updateitem.id);
  // if (index !== -1) {
  // console.log('change Item Working');
  // console.log('Index: ' + index);
  // console.log('updateItme: ' + updateitem);

  // this.dataSource.data[index] = updateitem;

  // const oldData = this.dataSource.data;
  // oldData.map((i) => {
  //   if (i.id == item.id) {
  //     i.name = item.name;
  //     i.amount = item.amount;
  //   }
  // });

  // this.dataSource = new DataTableDataSource(this.dataSource.data); // Refresh data source
  //}
}

// refresh() {
//   this.changeDetectorRefs.detectChanges();
// }
// }
