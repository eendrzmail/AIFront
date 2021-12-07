import { Employee } from './../../models/GET/Employee';
import { DeleteDialogComponent } from './../../components/delete-dialog/delete-dialog.component';
import { Worker } from './../../models/GET/Worker';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BonusDialogComponent } from 'src/app/components/bonus-dialog/bonus-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.css']
})
export class AllWorkersComponent implements OnInit {

  constructor(
    private HttpService: HttpService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  displayedColumns: string[] = ['name', 'surname', 'position', 'salary', 'last_bonus_date', "edit", "delete", "bonus"];
  dataSource: TableItem[] = [];

  page = 1;
  max_pages = 1;
  pages = [1]

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      console.log(x.page);
      this.page = +x.page

      if (x) {
        this.getWorkers(this.page)
      }
      else {
        this.getWorkers(1)
      }
    })
  }

  getWorkers(page: number) {
    this.HttpService.getAllWorkers(page).subscribe(x => {
      let temp: TableItem[] = []
      this.max_pages = x.meta.last_page
      this.pages = this.range(1, ++this.max_pages, 1)

      x.data.map((w: Employee) => {
        temp.push({
          uid: w.id || 0,
          name: w.first_name,
          surname: w.last_name,
          position: w.position,
          salary: w.salary,
          last_bonus_date: w.lastBonus?.created_at ? new Date(w.lastBonus?.created_at) : undefined
        }
        )
      })
      this.dataSource = temp;
    })
  }

  range(start: number, stop: number, step: number): Array<number> {
    step = step || 1;
    var arr = [];
    for (var i = start; i < stop; i += step) {
      arr.push(i);
    }
    return arr;
  };

  openDeleteDialog(w: Worker) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      data: w
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.HttpService.deleteWorker(result.uid).subscribe(r => {
          if (r.status == true) {
            this.getWorkers(this.page)
            this._snackBar.open("Usunięto", '', { duration: 2000, panelClass: ["green"] });
          }
          else {
            this._snackBar.open("Wystąpił błąd", '', { duration: 2000, panelClass: ["red"] });
          }
        },
          error => {
            this._snackBar.open("Wystąpił błąd", '', { duration: 2000, panelClass: ["red"] });

          })
      }
    });
  }

  openBonusDialog(w: Worker) {
    const dialogRef = this.dialog.open(BonusDialogComponent, {
      width: '300px',
      data: w
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.HttpService.giveBonus(result[0].uid, result[1]).subscribe(r => {
          console.log(r)
          if (r.data) {
            this._snackBar.open("Pomyślnie dano premię", '', { duration: 2000, panelClass: ["green"] });
          }
          else {
            this._snackBar.open("Wystąpił błąd", '', { duration: 2000, panelClass: ["red"] });
          }
          this.getWorkers(this.page)
        },
          error => {
            this._snackBar.open("Wystąpił błąd", '', { duration: 2000, panelClass: ["red"] });

          })
      }
    });
  }


}

interface TableItem extends Worker {
}
