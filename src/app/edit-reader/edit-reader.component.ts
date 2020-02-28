import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Reader } from "src/app/models/reader";
import { DataService } from 'src/app/core/data.service';
import { BadgeService } from 'src/app/core/badge.service';

@Component({
  selector: 'app-edit-reader',
  templateUrl: './edit-reader.component.html',
  styles: [],
  providers: [BadgeService]
})
export class EditReaderComponent implements OnInit {

  selectedReader: Reader;
  currentBadge: string;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private badgeService: BadgeService) { }

  ngOnInit() {
    let readerID: number = parseInt(this.route.snapshot.params['id']);

    this.dataService.getReaderById(readerID)
      .subscribe(
        (data: Reader) => this.selectedReader = data,
        (err: any) => console.log(err)
      );

    this.currentBadge = this.badgeService.getReaderBadge(this.selectedReader.totalMinutesRead);
  }

  saveChanges() {
    console.warn('Save reader not yet implemented.');
  }
}
