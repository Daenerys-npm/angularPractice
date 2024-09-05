import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpCService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]> {
    console.log('get request---');
    return this.http.get<any>('https://freetestapi.com/api/v1/movies');
  }
}
