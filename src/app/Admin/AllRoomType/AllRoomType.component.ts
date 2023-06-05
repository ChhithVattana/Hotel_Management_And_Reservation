import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomTypeModel } from 'src/app/Model/RoomTypeModel';
import { RoomServicesService } from 'src/app/Service/RoomServices.service';

@Component({
  selector: 'app-AllRoomType',
  templateUrl: './AllRoomType.component.html',
  styleUrls: ['./AllRoomType.component.css']
})
export class AllRoomTypeComponent implements OnInit {

  roomData: RoomTypeModel[] = [];
  emptyList: number = 0;
  isLoading: boolean = true;

  constructor(private router: Router, private roomTypeService: RoomServicesService) { }

  async ngOnInit() {
    this.roomData = await this.roomTypeService.getAllRoom();
    this.isLoading = false;
  }

  onClickAddRoomType() {
    this.router.navigate(['admin/allroomtype/addroomtype']);
  }

  getEmptyList():number {
    this.emptyList = 10 - this.roomData.length
    return this.emptyList
  }

  getRange(length: number): number[] {
    return Array.from({ length }, (_, i) => i + 1);
  }
}
