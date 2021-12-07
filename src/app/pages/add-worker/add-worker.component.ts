import { Worker } from './../../models/GET/Worker';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/models/GET/Employee';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar) { }

  WorkerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: ['', [Validators.required, Validators.minLength(3)]],
    position: ['', [Validators.required, Validators.minLength(3)]],
    salary: ['0', Validators.required],
  })

  ngOnInit(): void {
  }

  onSubmit() {
    let newWorker = {
      first_name: this.WorkerForm.get('name')?.value,
      last_name: this.WorkerForm.get('surname')?.value,
      position: this.WorkerForm.get('position')?.value,
      salary: +this.WorkerForm.get('salary')?.value,
    }
    this.http.addWorker(newWorker).subscribe(res => {
      console.log(res.status);

      if (res.data) {
        this.router.navigateByUrl("/")
        this.openSnackBar("Pomyślnie dodano")
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
