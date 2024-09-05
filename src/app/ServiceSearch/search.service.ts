import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  applySearch(dataSource: MatTableDataSource<any>, searchQuery: string): void {
    console.log('In search Service--');
    console.log(searchQuery + '----- search Query');
    dataSource.filter = searchQuery!.trim().toLowerCase();

    dataSource.filterPredicate = (data, filter) => {
      return data.title.toLowerCase().includes(filter);
      // data.id.toLowerCase().includes(filter) ||
      // data.amount.toLowerCase().includes(filter)
    };
  }
}
