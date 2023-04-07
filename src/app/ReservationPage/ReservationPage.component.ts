import { Component, OnInit } from '@angular/core';
import { RoomModel } from '../Model/RoomModel';
import { RoomServicesService } from '../Service/RoomServices.service';
import { ReservationService } from '../Service/Reservation.service';

@Component({
  selector: 'app-ReservationPage',
  templateUrl: './ReservationPage.component.html',
  styleUrls: ['./ReservationPage.component.css'],
})
export class ReservationPageComponent implements OnInit {
  roomData: RoomModel[] = [];
  available: RoomModel[] = [];
  data: any[] = [];

  constructor(
    private _roomData: RoomServicesService,
    private _reservation: ReservationService
  ) {}

  ngOnInit() {
    this.roomData = this._roomData.getAllRoom();
    this._reservation.getavailableRoomType("king")
  }

}
