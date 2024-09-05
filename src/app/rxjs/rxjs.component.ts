import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  concatMap,
  delay,
  fromEvent,
  interval,
  mergeMap,
  Observable,
  of,
  subscribeOn,
  switchMap,
  take,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',

  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css',
})
export class RxjsComponent {
  formH!: FormGroup;

  result!: string;

  mergeMapResult: string[] = [];

  constructor(private fb: FormBuilder) {
    this.formH = this.fb.group({
      searchControl: [''],
    });
  }
  ngOnInit(): void {
    //-----------------------------------------------------------------------------------
    //MergeMap

    const userIDs = of(1, 2, 3, 4);
    userIDs
      .pipe(mergeMap((id) => this.mergeHttpRequest(id)))
      .subscribe((response) => {
        this.mergeMapResult.push(response);
      });

    //------------------------------------------------------------------------------------

    // this.numberClicks.subscribe((x) => console.log(x));

    this.observable.subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.error('Error:', err);
      },
      complete() {
        console.log('Completed');
      },
    });

    this.observable2.subscribe({
      next(value) {
        console.log(value);
      },
      complete() {
        console.log('Completed');
      },
    });

    //SwitchMap
    this.obs1.subscribe({
      next(vals) {
        console.log(vals);
      },
      complete() {
        console.log('completed----');
      },
    });

    //ConcatMap

    //this.result2.subscribe((x) => console.log(x));

    this.obs4.subscribe({
      next(val) {
        console.log(val);
      },
      complete() {
        console.log('completed----');
      },
    });
  }

  observable = new Observable((subscriber) => {
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
  });

  observable2 = of(1, 2, 3);

  //SwitchMap
  onSubmit() {
    console.log('In Submit');

    const searchTerm = this.formH.get('searchControl')!.value;

    of(searchTerm)
      .pipe(switchMap((val) => this.fakeHttpRequest(val)))
      .subscribe((response) => {
        this.result = response;
        console.log('completed task');
      });
  }

  fakeHttpRequest(query: string) {
    console.log('In Http Request Handler');
    console.log(`Making request for ${query}`);
    return of(`Result for ${query}`).pipe(delay(1000));
  }

  obs1 = of(1, 2, 3).pipe(switchMap((val) => of(val * 2, val * 3, val * 4)));

  clicks = fromEvent(document, 'click');
  numberClicks = this.clicks.pipe(concatMap(() => interval(1000)));

  //concatMap

  obs4 = of(1, 2, 3).pipe(concatMap((val) => of(val * 1, val * 2, val * 3)));

  clicks2 = fromEvent(document, 'click');
  result2 = this.clicks2.pipe(concatMap((ev) => interval(1000).pipe(take(4))));

  //MergeMap
  mergeHttpRequest(id: number) {
    console.log(`Fetching data for user ${id}`);
    return of(`User data for ID: ${id}`).pipe(delay(1000));
  }
}
