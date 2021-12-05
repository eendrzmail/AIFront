import { AddWorkerComponent } from './pages/add-worker/add-worker.component';
import { EditWorkerComponent } from './pages/edit-worker/edit-worker.component';
import { AllWorkersComponent } from './pages/all-workers/all-workers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AllWorkersComponent },
  { path: 'edit/:uid', component: EditWorkerComponent },
  { path: 'add', component: AddWorkerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
