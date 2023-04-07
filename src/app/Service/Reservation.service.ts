import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomModel } from '../Model/RoomModel';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  availableRoomType: RoomModel[] = [];

  getavailableRoomType(name: any) {
    this.availableRoomType = [];
    this.http
      .get(
        `http://localhost:6969/api/v1/reservation/searchAvailable?page=0&size=10&checkInOn=2023-05-02&checkOutOn=2023-05-03&q=${name}&isAvailable=true`,
        this.httpOption
      )
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: RoomModel) => {
          this.availableRoomType.push(r);
          return
        });
      });
    console.log(this.availableRoomType);
    return this.availableRoomType;
  }
}
