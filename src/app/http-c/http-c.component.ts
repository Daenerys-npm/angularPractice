import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HeroService } from '../ser/hero.service';
import { HttpCService } from '../ServieHttp/http-c.service';
import { FormControl } from '@angular/forms';
import { SearchService } from '../ServiceSearch/search.service';
import { MatPaginator } from '@angular/material/paginator';

// export interface MovieData {
//   id: string;
//   title: string;
//   director: string;
// }

const ELEMENT_DATA: any[] = [];

@Component({
  selector: 'app-http-c',

  templateUrl: './http-c.component.html',
  styleUrl: './http-c.component.css',
})
export class HttpCComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private httpService: HttpCService,
    private searchService: SearchService
  ) {}

  searchControl: FormControl = new FormControl('');

  Movies: any[] = [];
  displayedColumns = ['id', 'title', 'director', 'year'];
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.httpService.getMovies().subscribe((config) => {
      console.log('getting data---');
      // process the configuration.
      // const FinalData = config.filter((item) => item.year > 1994);
      this.dataSource.data = [...config];
      console.log(config);
    });

    this.searchControl.valueChanges.subscribe((searchText) =>
      this.applyFilter(searchText)
    );
  }
  applyFilter(abc: string): void {
    console.log(abc + ' ----------');
    this.searchService.applySearch(this.dataSource, abc);
  }
}
