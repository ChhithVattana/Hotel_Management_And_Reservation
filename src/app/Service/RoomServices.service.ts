import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomModel } from '../Model/RoomModel';
import { RoomTypeModel } from '../Model/RoomTypeModel';

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

  roomDataDetail: RoomTypeModel[] = [];
  roomData: RoomTypeModel[] = [];

  async getAllRoom() {
    this.roomData = [];
    await this.http
      .get('http://localhost:6969/api/v1/roomType?page=0&size=10&q=', this.httpOption)
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: RoomTypeModel) => {
          this.roomData.push(r);
        });
      });
      console.log(this.roomData);
    return this.roomData;
  }

  async getRoomById(id: number) {
    this.roomDataDetail = [];
    await this.http
      .get(`http://localhost:6969/api/v1/roomType/getById?id=${id}`, this.httpOption)
      .toPromise()
      .then((res: any) => {
        this.roomDataDetail.push(res.result)
      });
      console.log(this.roomDataDetail);
    return this.roomDataDetail;
  }
}
