import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomModel } from '../Model/RoomModel';

@Injectable({
  providedIn: 'root',
})
export class RoomServicesService {
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  roomDataDetail: RoomModel[] = [];
  roomData: RoomModel[] = [];

  getAllRoom() {
    this.roomData = [];
    this.http
      .get('http://localhost:6969/api/v1/roomType?page=0&size=10&q=', this.httpOption)
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: RoomModel) => {
          this.roomData.push(r);
        });
      });
      console.log(this.roomData);
    return this.roomData;
  }

  getRoomById(id: number) {
    this.roomDataDetail = [];
    this.http
      .get(`http://localhost:6969/api/v1/roomType/getById?id=${id}`, this.httpOption)
      .toPromise()
      .then((res: any) => {
        this.roomDataDetail.push(res.result)
      });
      console.log(this.roomDataDetail);
    return this.roomDataDetail;
  }
}
