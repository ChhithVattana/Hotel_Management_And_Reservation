import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomModel } from '../Model/RoomModel';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  availableRoomType: RoomModel[] = [];

  async getavailableRoomType(dateIn: Date, dateOut: Date, capacity: number) {
    this.availableRoomType = [];
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }),
    };
    console.log(dateIn, dateOut, capacity);
    await this.http
      .get(
        `http://localhost:6969/api/v1/reservation/searchAvailable?page=0&size=10&checkInOn=${this.datePipe.transform(
          dateIn,
          'yyyy-MM-dd'
        )}&checkOutOn=${this.datePipe.transform(
          dateOut,
          'yyyy-MM-dd'
        )}&adults=${capacity}&isAvailable=true`,
        httpOption
      )
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: RoomModel) => {
          this.availableRoomType.push(r);
        });
      });
    return this.availableRoomType;
  }
}
