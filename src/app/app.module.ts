import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllWorkersComponent } from './pages/all-workers/all-workers.component';
import { EditWorkerComponent } from './pages/edit-worker/edit-worker.component';
import { AddWorkerComponent } from './pages/add-worker/add-worker.component';

import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { BonusDialogComponent } from './components/bonus-dialog/bonus-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DetaildComponent } from './pages/detaild/detaild.component';
import { MatSortModule } from '@angular/material/sort';




@NgModule({
  declarations: [
    AppComponent,
    AllWorkersComponent,
    EditWorkerComponent,
    AddWorkerComponent,
    DeleteDialogComponent,
    BonusDialogComponent,
    DetaildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
