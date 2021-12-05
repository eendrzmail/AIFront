import { Worker } from './../models/GET/Worker';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  mock = [
    {
      uid: "1",
      name: "Pierwszy",
      surname: "Ziomek",
      position: "string",
      salary: "100",
      last_bonus_date: new Date()
    },
    {
      uid: "2",
      name: "Drugi",
      surname: "Jest",
      position: "string",
      salary: "200",
      last_bonus_date: new Date()
    }
  ]

  getAllWorkers(): Observable<Worker[]> {
    // return this.http.get()
    return of(this.mock).pipe(take(1))
  }

  getOneWorker(uid: string): Observable<Worker> {
    // 
    return of(this.mock[0]).pipe(take(1))
  }

  updateWorker(worker: Worker): Observable<any> {
    this.mock[0] = Object.assign(this.mock[0], worker)
    return of([200])
  }

  addWorker(worker: Worker): Observable<any> {
    this.mock.push(worker)
    return of([200])
  }

  deleteWorker(uid: string): Observable<any> {
    console.log(uid);
    this.mock.pop();
    return of([200])
  }

  giveBonus(uid: string, amount: number): Observable<any> {
    console.log(uid, amount);

    return of([200])
  }

}