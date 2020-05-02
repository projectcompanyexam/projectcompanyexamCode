import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { Countries } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchCountires() : Observable<Countries[]> {
    return of(this.countries);
  }

  countries: Countries[] = [
      { id: 1, name: 'Argentina' },
      { id: 2, name: 'Brazil' },
      { id: 3, name: 'Colombia' },
      { id: 4, name: 'Dominican Republic' },
      { id: 5, name: 'Ecuador' }, 
      { id: 6, name: 'France' },
      { id: 7, name: 'Greece' },
      { id: 8, name: 'Hong Kong (China)' },
      { id: 9, name: 'Israel' },
      { id: 10, name: 'Japan' },
      { id: 11, name: 'Kenya' },
      { id: 12, name: 'Lebanon' },
      { id: 13, name: 'Maldives' }, 
      { id: 14, name: 'New Zealand' },
      { id: 15, name: 'Oman' },
      { id: 16, name: 'Philippines' },
      { id: 17, name: 'Qatar' },
      { id: 18, name: 'Romania' },
      { id: 19, name: 'Sri Lanka' },
      { id: 20, name: 'Turkey' },
      { id: 21, name: 'United States of America' }, 
      { id: 22, name: 'Vanuatu' },
      { id: 23, name: 'Wallis and Futuna Islands' },
      { id: 24, name: 'Yemen' },
      { id: 25, name: 'Zimbabwe' }
  ];



}
