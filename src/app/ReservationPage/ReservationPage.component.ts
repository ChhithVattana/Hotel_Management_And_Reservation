import { Component, OnInit } from '@angular/core';
import { RoomModel } from '../Model/RoomModel';
import { RoomServicesService } from '../Service/RoomServices.service';
import { ReservationService } from '../Service/Reservation.service';
import { RoomTypeModel } from '../Model/RoomTypeModel';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-ReservationPage',
  templateUrl: './ReservationPage.component.html',
  styleUrls: ['./ReservationPage.component.css'],
})
export class ReservationPageComponent implements OnInit {
  roomData: RoomTypeModel[] = [];
  available: RoomModel[] = [];
  data: RoomModel[] = [];
  noRoom: number = 1;
  form: FormGroup;

  constructor(
    private _roomData: RoomServicesService,
    private _reservation: ReservationService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      date: new FormControl('', Validators.required),
      date1: new FormControl('', Validators.required),
      rooms: new FormControl('', Validators.required),
      adults: new FormControl('', Validators.required),
    });
  }

  async ngOnInit() {
    this.roomData = await this._roomData.getAllRoom();
    this.route.queryParams.subscribe((params) => {
      const dateIn = params['checkInOn'];
      const dateOut = params['checkOutOn'];
      const capacity = params['adults'];
      this.noRoom = params['rooms'];
      console.log(dateIn, dateOut, capacity, this.noRoom);
      this.availableRoomData(dateIn, dateOut, capacity);
      this.form.patchValue({
        date: dateIn,
        date1: dateOut,
        adults: capacity,
        rooms: this.noRoom
      })
    });
  }

  async availableRoomData(dateIn: Date, dateOut: Date, capacity: number) {
    this.data = await this._reservation.getavailableRoomType(
      dateIn,
      dateOut,
      capacity
    );
    console.log(this.data);
  }

  checkEachRoom(name: String): boolean {
    var tmp: number = 0;
    for (const roomData of this.data) {
      if (roomData.roomTypeId.name === name) {
        tmp++;
      }
    }
    if (tmp >= this.noRoom) {
      return true;
    }
    return false;
  }

  checkEachRoomAvailable(name: String): number {
    var tmp: number = 0;
    for (const roomData of this.data) {
      if (roomData.roomTypeId.name === name) {
        tmp++;
      }
    }
    return tmp;
  }

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
