import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddReaderComponent } from './add-reader/add-reader.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { BookLogComponent } from './book-log/book-log.component';
import { BookLibraryModule } from 'book-library';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditReaderComponent,
    AddReaderComponent,
    BookLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BookLibraryModule,
    BooksModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
