import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RoomModel } from '../Model/RoomModel';
import { RoomServicesService } from '../Service/RoomServices.service';
import { ReservationService } from '../Service/Reservation.service';
import { RoomTypeModel } from '../Model/RoomTypeModel';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthGaurdService } from '../Service/AuthGaurd.service';
import { ReservationDto } from '../Model/CustomModel/ReservationDto';
import { TransactionDto } from '../Model/CustomModel/TransactionDto';
import { CustomerModel } from '../Model/CustomerModel';

@Component({
  selector: 'app-ReservationPage',
  templateUrl: './ReservationPage.component.html',
  styleUrls: ['./ReservationPage.component.css'],
})
export class ReservationPageComponent implements OnInit {
  @ViewChild('input_info', { static: false }) scrollTarget!: ElementRef;

  roomData: RoomTypeModel[] = [];
  available: RoomModel[] = [];
  data: RoomModel[] = [];
  noRoom: number = 1;
  form: FormGroup;
  check: boolean = false;
  isLoading: boolean = true;
  ordering: boolean = false;
  tmp: any = {};
  getCheckInData: any = {};
  getCheckOutData: any = {};
  getGuestData: any = {};

  constructor(
    private _roomData: RoomServicesService,
    private _reservation: ReservationService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private authGuard: AuthGaurdService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      date: new FormControl('', Validators.required),
      date1: new FormControl('', Validators.required),
      rooms: new FormControl('', Validators.required),
      adults: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      request: new FormControl('', Validators.nullValidator),
    });
  }

  async ngOnInit() {
    this.authGuard.canActivate();
    this.roomData = await this._roomData.getAllRoom();
    this.route.queryParams.subscribe((params) => {
      this.getCheckInData = params['checkInOn'];
      this.getCheckOutData = params['checkOutOn'];
      this.getGuestData = params['adults'];
      this.noRoom = params['rooms'];
      this.availableRoomData(
        this.getCheckInData,
        this.getCheckOutData,
        this.getGuestData
      );
      this.form.patchValue({
        date: this.getCheckInData,
        date1: this.getCheckOutData,
        adults: this.getGuestData,
        rooms: this.noRoom,
      });
    });
    // Reload page when query params change manually
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  async availableRoomData(dateIn: Date, dateOut: Date, capacity: number) {
    this.data = await this._reservation.getAllAvailableRoomType(
      dateIn,
      dateOut,
      capacity
    );
    if (this.data.length === 0) {
      this.check = false;
    } else {
      this.check = true;
    }
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
    // get the new param and change the url value
    const queryParams = { ...this.route.snapshot.queryParams };
    queryParams['checkInOn'] = this.datePipe.transform(date, 'yyyy-MM-dd');
    queryParams['checkOutOn'] = this.datePipe.transform(date1, 'yyyy-MM-dd');
    queryParams['adults'] = adults;
    queryParams['rooms'] = rooms;
    this.router.navigate(['/reservation/searchAvailable'], { queryParams });
  }

  // convert the last sentence of the text into ... because its too long
  truncateText(text: String, maxLength: number): String {
    if (text.length <= maxLength) {
      return text;
    }

    // Truncate to the nearest sentence within maxLength
    const truncatedText = text
      .slice(0, maxLength)
      .replace(/([^.?!])\s+[a-zA-Z0-9]*$/, '$1...');

    return truncatedText;
  }

  onClickBook(room: any) {
    this.ordering = true;
    this.tmp = room;
    const element = document.getElementById('input_info');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  confirmBooking() {
    this._reservation.addBooking(
      new ReservationDto(
        this.getCheckInData,
        this.getCheckOutData,
        this.form.value.request,
        new TransactionDto(
          'Online',
          new CustomerModel(
            0,
            this.form.value.name,
            this.form.value.phone,
            this.form.value.email
          )
        )
      ),
      this.getCheckInData,
      this.getCheckOutData,
      this.noRoom,
      this.tmp.name
    );
  }
}
