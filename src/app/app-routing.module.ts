import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBookComponent } from "src/app/add-book/add-book.component";
import { AddReaderComponent } from "src/app/add-reader/add-reader.component";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";
import { EditBookComponent } from "src/app/edit-book/edit-book.component";
import { EditReaderComponent } from "src/app/edit-reader/edit-reader.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addbook', component: AddBookComponent },
  { path: 'addreader', component: AddReaderComponent },
  { path: 'editreader/:id', component: EditReaderComponent },
  { path: 'editbook/:id', component: EditBookComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
