import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomModel } from '../Model/RoomModel';
import { RoomTypeModel } from '../Model/RoomTypeModel';
import { AuthService } from './Auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoomServicesService {

  constructor(private http: HttpClient) {}

  roomDataDetail: RoomTypeModel[] = [];
  roomData: RoomTypeModel[] = [];

  async getAllRoom() {
    console.log('getAllroom()');
    this.roomData = [];
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    await this.http
      .get(
        'http://localhost:6969/api/v1/roomType?page=0&size=10&q=',
        httpOption
      )
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
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    await this.http
      .get(
        `http://localhost:6969/api/v1/roomType/getById?id=${id}`,
        httpOption
      )
      .toPromise()
      .then((res: any) => {
        this.roomDataDetail.push(res.result);
      });
    console.log(this.roomDataDetail);
    return this.roomDataDetail;
  }
}
