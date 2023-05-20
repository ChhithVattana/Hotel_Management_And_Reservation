import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomTypeModel } from '../Model/RoomTypeModel';

@Injectable({
  providedIn: 'root',
})
export class RoomServicesService {

  constructor(private http: HttpClient) {}

  roomDataDetail: RoomTypeModel[] = [];
  roomData: RoomTypeModel[] = [];

  async getAllRoom() {
    this.roomData = [];
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    await this.http
      .get(
        'https://m1g7.seyna.iteg7.com/api/v1/roomType?page=0&size=10&q=',
        httpOption
      )
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: RoomTypeModel) => {
          this.roomData.push(r);
        });
      });
    return this.roomData;
  }

  async getRoomById(id: number) {
    this.roomDataDetail = [];
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    await this.http
      .get(
        `https://m1g7.seyna.iteg7.com/api/v1/roomType/getById?id=${id}`,
        httpOption
      )
      .toPromise()
      .then((res: any) => {
        this.roomDataDetail.push(res.result);
      });
    return this.roomDataDetail;
  }
}
