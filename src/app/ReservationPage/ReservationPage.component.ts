import { Component, OnInit } from '@angular/core';
import { RoomModel } from '../Model/RoomModel';
import { RoomServicesService } from '../Service/RoomServices.service';
import { ReservationService } from '../Service/Reservation.service';
import { RoomTypeModel } from '../Model/RoomTypeModel';

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

  constructor(
    private _roomData: RoomServicesService,
    private _reservation: ReservationService
  ) {}

  async ngOnInit() {
    this.roomData = await this._roomData.getAllRoom();
    this.availableRoomData('');
  }

  async availableRoomData(name: String) {
    this.data = await this._reservation.getavailableRoomType(name);
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
}
