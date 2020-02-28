import { Component, OnInit } from '@angular/core';

import { Reader } from "src/app/models/reader";

@Component({
  selector: 'app-add-reader',
  templateUrl: './add-reader.component.html',
  styles: []
})
export class AddReaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  saveReader(formValues: any): void {
    let newReader: Reader = <Reader>formValues;
    newReader.readerID = 0;
    console.log(newReader);
    console.warn('Save new reader not yet implemented.');
  }

}
