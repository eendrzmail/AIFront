import { Worker } from './../../models/GET/Worker';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    name: ['', Validators.required],
    surname: ['', Validators.required],
    position: ['', Validators.required],
    salary: ['0', Validators.required],
  })

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.addWorker(this.WorkerForm.value).subscribe(res => {
      if (res / 100 == 2) {
        this.router.navigateByUrl("/")
        this.openSnackBar("Pomyślnie dodano")
      }
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 2000, panelClass: ["green"] });
  }


}
