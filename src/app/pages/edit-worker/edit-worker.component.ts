import { Employee } from './../../models/GET/Employee';
import { Worker } from './../../models/GET/Worker';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  uid: string = ""
  person: Employee | null = null;

  WorkerForm = this.fb.group({
    id: ['', Validators.required],
    first_name: ['', [Validators.required, Validators.minLength(3)]],
    last_name: ['', [Validators.required, Validators.minLength(3)]],
    position: ['', [Validators.required, Validators.minLength(3)]],
    salary: ['0', Validators.required],
  })

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.uid = x.uid
      this.getWorker(x.uid)
    })
  }

  getWorker(uid: string) {
    this.http.getOneWorker(uid).subscribe(data => {
      this.person = data
      console.log(data)
      this.WorkerForm.controls['id'].setValue(data.id)
      this.WorkerForm.controls['first_name'].setValue(data.first_name)
      this.WorkerForm.controls['last_name'].setValue(data.last_name)
      this.WorkerForm.controls['position'].setValue(data.position)
      this.WorkerForm.controls['salary'].setValue(data.salary)
    })
  }

  onSubmit() {
    this.person = Object.assign(this.person, this.WorkerForm.value)
    if (!this.person) return

    this.http.updateWorker(this.person).subscribe(res => {
      console.log(res);
      if (res.data) {
        this.router.navigateByUrl("/")
        this.openSnackBar("Pomyślnie zedytowano")
      }
      else {
        this._snackBar.open("Wystąpił błąd", '', { duration: 2000, panelClass: ["red"] });
      }
    },
      error => {
        this._snackBar.open("Wystąpił błąd", '', { duration: 2000, panelClass: ["red"] });

      })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 2000, panelClass: ["green"] });
  }

}
