import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-SearchBox',
  templateUrl: './SearchBox.component.html',
  styleUrls: ['./SearchBox.component.css'],
})
export class SearchBoxComponent implements OnInit {
  date = new FormControl(this.checkInDate());
  date1 = new FormControl(this.checkOutDate());
  constructor() {}
  ngOnInit() {}

  checkInDate() {
    const date = new Date();
    date.setDate(date.getDate())
    return date
  }

  checkOutDate() {
    const date = new Date();
    date.setDate(date.getDate() + 1)
    return date
  }
}
