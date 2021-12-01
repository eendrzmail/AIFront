import { Worker } from './../models/GET/Worker';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getAllWorkers(): Observable<Worker[]> {
    // return this.http.get()
    let mock = [
      {
        name: "Stary",
        surname: "twój",
        position: "string",
        salary: "string",
        last_bonus_date: new Date()
      },
      {
        name: "Sytara",
        surname: "twojaj",
        position: "string",
        salary: "string",
        last_bonus_date: new Date()
      }
    ]
    return of(mock)
  }


}
