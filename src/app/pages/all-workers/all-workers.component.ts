import { DeleteDialogComponent } from './../../components/delete-dialog/delete-dialog.component';
import { Worker } from './../../models/GET/Worker';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BonusDialogComponent } from 'src/app/components/bonus-dialog/bonus-dialog.component';

@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.css']
})
export class AllWorkersComponent implements OnInit {

  constructor(
    private HttpService: HttpService,
    public dialog: MatDialog
  ) { }

  displayedColumns: string[] = ['name', 'surname', 'position', 'salary', 'last_bonus_date', "edit", "delete", "bonus"];
  dataSource: TableItem[] = [];


  ngOnInit(): void {
    this.getWorkers()
  }

  getWorkers() {
    this.HttpService.getAllWorkers().subscribe(x => {
      let temp: TableItem[] = []
      x.map(w => {
        temp.push({ ...w, time_passed: "asd" })
        // console.log(TableDATA)
      })
      this.dataSource = temp;
    })
  }

  openDeleteDialog(w: Worker) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      data: w
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.HttpService.deleteWorker(result.uid).subscribe(r => {
          this.getWorkers()
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
          this.getWorkers()
        })
      }
    });
  }


}

interface TableItem extends Worker {
  time_passed: string
}
