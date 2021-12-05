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

  url = "https://127.0.0.1/";

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
    return of(this.mock).pipe(take(1))

    // return this.http.get<Worker[]>(`${this.url}/workers`)
  }

  getOneWorker(uid: string): Observable<Worker> {
    return of(this.mock[0]).pipe(take(1))

    // return this.http.get<Worker>(`${this.url}/workers/${uid}`)
  }

  updateWorker(worker: Worker): Observable<any> {
    this.mock[0] = Object.assign(this.mock[0], worker)
    return of([200])

    // TODO set body, headers for api
    // return this.http.patch(`${this.url}/workers/${worker.uid}`, worker, {})
  }

  addWorker(worker: Worker): Observable<any> {
    this.mock.push(worker)
    return of([200])

    //TODO set body, headers for api
    // return this.http.post(`${this.url}/workers`, worker, {})
  }

  deleteWorker(uid: string): Observable<any> {
    console.log(uid);
    this.mock.pop();
    return of([200])

    // return this.http.delete(`${this.url}/workers/${uid}`)
  }

  giveBonus(uid: string, amount: number): Observable<any> {
    console.log(uid, amount);

    return of([200])

    // TODO set for api
    // const headers = { 'nontent-type': 'application/json' };
    // const body = { amount: amount };
    // return this.http.post(`${this.url}/bonus/${uid}`, body, { headers })
  }

}