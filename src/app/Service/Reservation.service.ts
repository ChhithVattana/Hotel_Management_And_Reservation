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

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }),
  };

  async getavailableRoomType(dateIn: Date, dateOut: Date, capacity: number) {
    this.availableRoomType = [];
    await this.http
      .get(
        `https://m1g7.seyna.iteg7.com/api/v1/reservation/searchAvailable?page=0&size=10&checkInOn=${this.datePipe.transform(
          dateIn,
          'yyyy-MM-dd'
        )}&checkOutOn=${this.datePipe.transform(
          dateOut,
          'yyyy-MM-dd'
        )}&adults=${capacity}&isAvailable=true`,
        this.httpOption
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
