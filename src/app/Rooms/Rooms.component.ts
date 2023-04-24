import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { ImageService } from '../Service/Image.service';
import { RoomServicesService } from '../Service/RoomServices.service';
import { RoomModel } from '../Model/RoomModel';
import { ImageModel } from '../Model/ImageModel';
import { RoomTypeModel } from '../Model/RoomTypeModel';
import { AuthService } from '../Service/Auth.service';
import { AuthGaurdService } from '../Service/AuthGaurd.service';

@Component({
  selector: 'app-Rooms',
  templateUrl: './Rooms.component.html',
  styleUrls: ['./Rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  scrWidth: any;
  roomData: RoomTypeModel[] = [];
  imageData: ImageModel[] = [];

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    return (this.scrWidth = window.innerWidth);
  }
  // output to share data from child to parent
  @Output() newRoomEvent = new EventEmitter<any>();
  onClickNewRoom(value: any) {
    let tmp = this._roomData.getRoomById(value.id);
    this.newRoomEvent.emit(tmp);
  }
  constructor(
    private router: Router,
    private _imageData: ImageService,
    private _roomData: RoomServicesService,
    private authGuard: AuthGaurdService
  ) {}
  async ngOnInit() {
    this.roomData = await this._roomData.getAllRoom();
    // this.imageData = this._imageData.getAllImage();
    console.log('I am Room Content CArds');
  }
  onClickNavigate(room: any) {
    this.router.navigate([`/ourroom/content/${room.id}`]);
  }
  checkData(): boolean {
    console.log(this.roomData);
    if (this.roomData === null) {
      return true;
    }
    return false;
  }
  reload() {
    window.location.reload();
  }
  // convert the last sentence of the text into ... because its too long
  truncateText(text: String, maxLength: number): String {
    if (text.length <= maxLength) {
      return text;
    }

    // Truncate to the nearest sentence within maxLength
    const truncatedText = text
      .slice(0, maxLength)
      .replace(/([^.?!])\s+[a-zA-Z0-9]*$/, '$1...');

    return truncatedText;
  }
}
