import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-SearchBox',
  templateUrl: './SearchBox.component.html',
  styleUrls: ['./SearchBox.component.css'],
})
export class SearchBoxComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
    this.form = fb.group({
      date: new FormControl(this.checkInDate(), Validators.required),
      date1: new FormControl(this.checkOutDate(), Validators.required),
      rooms: new FormControl('1', Validators.required),
      adults: new FormControl('1', Validators.required),
    });
  }

  ngOnInit() {}

  checkInDate() {
    const date = new Date();
    date.setDate(date.getDate());
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  checkOutDate() {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  goToUrl(link: string) {
    window.open(link, '_blank');
  }

  onSubmit() {
    const date = (<HTMLInputElement>(
      document.querySelector('[formControlName="date"]')
    )).value;
    const date1 = (<HTMLInputElement>(
      document.querySelector('[formControlName="date1"]')
    )).value;
    const rooms = (<HTMLSelectElement>(
      document.querySelector('[aria-label="rooms"]')
    )).value;
    const adults = (<HTMLSelectElement>(
      document.querySelector('[aria-label="adults"]')
    )).value;
    console.log(date, date1, rooms, adults);
    this.goToUrl(
      `http://localhost:4200/#/reservation/searchAvailable?checkInOn=${this.datePipe.transform(
        date,
        'yyyy-MM-dd'
      )}&checkOutOn=${this.datePipe.transform(
        date1,
        'yyyy-MM-dd'
      )}&adults=${adults}&rooms=${rooms}&isAvailable=true`
    );
  }
}
