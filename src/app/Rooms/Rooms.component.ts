import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { ImageService } from '../Service/Image.service';
import { RoomServicesService } from '../Service/RoomServices.service';
import { RoomModel } from '../Model/RoomModel';
import { ImageModel } from '../Model/ImageModel';

@Component({
  selector: 'app-Rooms',
  templateUrl: './Rooms.component.html',
  styleUrls: ['./Rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  scrWidth: any;
  roomData: RoomModel[] = [];
  imageData: ImageModel[] = [];

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    return (this.scrWidth = window.innerWidth);
  }

  // output to share data from child to parent
  @Output() newRoomEvent = new EventEmitter<any>();
  onClickNewRoom(value: any) {
    let tmp = this._roomData.getRoomById(value.id)
    this.newRoomEvent.emit(tmp);
  }

  constructor(
    private router: Router,
    private _imageData: ImageService,
    private _roomData: RoomServicesService,
  ) {}

  ngOnInit() {
    this.roomData = this._roomData.getAllRoom();
    this.imageData = this._imageData.getAllImage()
  }

  onClickNavigate(room: any) {
    this.router.navigate([`/ourroom/content/${room.id}`]);
  }
}
