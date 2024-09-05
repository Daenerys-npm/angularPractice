import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeroService } from '../ser/hero.service';
import { Observable, of, subscribeOn, switchMap } from 'rxjs';

@Component({
  selector: 'app-built-in-dir',
  //standalone: true,
  // imports: [NgClass],
  templateUrl: './built-in-dir.component.html',
  styleUrl: './built-in-dir.component.css',
})
export class BuiltInDirComponent {
  //Injecting Hero Service
  constructor(private heroService: HeroService) {}

  printHeros() {
    this.heroService.getHeros();
  }

  [x: string]: any;
  it!: {
    id: number;
    name: string;
  };

  id = 1;
  abc = false;
  def = true;
  value1 = '';
  count = 1;

  item1 = {
    id: 3,
    name: 'jane',
    age: 20,
  };

  data = [
    { id: 1, name: 'sp' },
    { id: 2, name: 'pp' },
    { id: 3, name: 'pooja' },
  ];

  //CurrentClasses!: Record<string, Boolean>;
  CurrentClasses = {};

  CurrentStyles!: Record<string, string>;
  ngOnInit(): void {
    this.setCurrentClasses();
    this.setCurrentStyles();
    this.printHeros();
  }

  setCurrentClasses() {
    this.CurrentClasses = {
      special: this.def,
    };
  }

  setCurrentStyles() {
    this.CurrentStyles = {
      'background-color': 'blue',
      'font-size': this.def ? '24px' : '50px',
      'font-style': this.def ? 'italic' : 'normal',
    };
  }

  setUpperCase(eve: string) {
    this.value1 = this.value1.toUpperCase();
  }

  // obs2 = new Observable((subscriber) => {
  //   subscriber.next('this data is :');
  // }).pipe(
  //   switchMap(
  //     (val) =>
  //       new Observable((subscriber) => {
  //         subscriber.next('sakshi');
  //         subscriber.next('sunil');
  //       })
  //   )
  // );
}
