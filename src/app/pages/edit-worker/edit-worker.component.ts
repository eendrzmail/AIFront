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
  person: Worker | null = null;

  WorkerForm = this.fb.group({
    uid: ['', Validators.required],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    position: ['', Validators.required],
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
      this.WorkerForm.controls['uid'].setValue(data.uid)
      this.WorkerForm.controls['name'].setValue(data.name)
      this.WorkerForm.controls['surname'].setValue(data.surname)
      this.WorkerForm.controls['position'].setValue(data.position)
      this.WorkerForm.controls['salary'].setValue(+data.salary)
    })
  }

  onSubmit() {
    this.http.updateWorker(this.WorkerForm.value).subscribe(res => {
      if (res / 100 == 2) {
        this.router.navigateByUrl("/")
        this.openSnackBar("Pomyślnie zedytowano")
      }
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 2000, panelClass: ["green"] });
  }

}
