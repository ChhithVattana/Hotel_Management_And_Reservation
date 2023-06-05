import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomTypeModel } from '../Model/RoomTypeModel';
import { RoomModel } from '../Model/RoomModel';
import { ResponseModel } from '../Model/ResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RoomServicesService {
  constructor(private http: HttpClient) {}

  roomDataDetail: RoomTypeModel[] = [];
  roomTypeData: RoomTypeModel[] = [];
  roomData: RoomModel[] = [];
  response: ResponseModel<RoomModel[]> = new ResponseModel<RoomModel[]>([], 0);

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    }),
  };

  // all room type
  async getAllRoom() {
    this.roomTypeData = [];
    await this.http
      .get(
        'https://m1g7.seyna.iteg7.com/api/v1/roomType?page=0&size=10&q=',
        this.httpOption
      )
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: RoomTypeModel) => {
          this.roomTypeData.push(r);
        });
      });
    return this.roomTypeData;
  }

  // room type by id
  async getRoomById(id: number) {
    this.roomDataDetail = [];
    await this.http
      .get(
        `https://m1g7.seyna.iteg7.com/api/v1/roomType/getById?id=${id}`,
        this.httpOption
      )
      .toPromise()
      .then((res: any) => {
        this.roomDataDetail.push(res.result);
      });
    return this.roomDataDetail;
  }

  async getAllRoomList(page: number) {
    this.response.result = [];
    await this.http
      .get(
        `https://m1g7.seyna.iteg7.com/api/v1/room?page=${page}&size=10&q=`,
        this.httpOption
      )
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: RoomModel) => {
          this.response.result.push(r);
        });
        this.response.length = res.length
      });
      console.log(this.response)
    return this.response;
  }
}
