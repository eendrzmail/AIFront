import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllWorkersComponent } from './pages/all-workers/all-workers.component';
import { EditWorkerComponent } from './pages/edit-worker/edit-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    AllWorkersComponent,
    EditWorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
