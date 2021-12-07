import { Employee } from './../models/GET/Employee';
import { Worker } from './../models/GET/Worker';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  url = "https://ai-backend-1.herokuapp.com/api";


  getAllWorkers(page: number): Observable<any> {
    return this.http.get(`${this.url}/employees?page=${page}`)

    // return this.http.get(`${this.url}/employees?page=${page}`).pipe(
    //   map((result: any) => result.data)
    // )
  }

  getOneWorker(uid: string): Observable<Employee> {
    return this.http.get(`${this.url}/employees/${uid}`).pipe(
      map((res: any) => res.data)
    )
  }

  updateWorker(worker: Employee): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    return this.http.patch(`${this.url}/employees/${worker.id}`, worker, { headers })
  }

  addWorker(worker: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    return this.http.post(`${this.url}/employees`, worker, { headers })
  }

  deleteWorker(uid: string): Observable<any> {
    return this.http.delete(`${this.url}/employees/${uid}`)
  }

  giveBonus(uid: string, amount: number): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = { employee_id: uid, amount: amount };
    return this.http.post(`${this.url}/bonuses`, body, { headers })
  }

}