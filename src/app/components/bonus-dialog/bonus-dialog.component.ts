import { Worker } from './../../models/GET/Worker';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bonus-dialog',
  templateUrl: './bonus-dialog.component.html',
  styleUrls: ['./bonus-dialog.component.css']
})
export class BonusDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BonusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Worker,
  ) { }

  amount: number = 100;

  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onConfirm(): void {
    this.dialogRef.close([this.data, this.amount]);
  }

}
