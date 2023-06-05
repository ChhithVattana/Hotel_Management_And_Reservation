import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomModel } from 'src/app/Model/RoomModel';
import { AuthGaurdService } from 'src/app/Service/AuthGaurd.service';
import { RoomServicesService } from 'src/app/Service/RoomServices.service';

@Component({
  selector: 'app-AllRooms',
  templateUrl: './AllRooms.component.html',
  styleUrls: ['./AllRooms.component.css'],
})
export class AllRoomsComponent implements OnInit {
  roomData: RoomModel[] = [];
  emptyList: number = 0;
  isLoading: boolean = true;
  pageIndex = 0;

  constructor(
    private router: Router,
    private roomService: RoomServicesService
  ) {}

  async ngOnInit() {
    this.roomData = await this.roomService.getAllRoomList(0);
    this.isLoading = false;
  }

  onClickAddRoom() {
    this.router.navigate(['admin/allrooms/editallrooms']);
  }

  getEmptyList(): number {
    this.emptyList = 10 - this.roomData.length;
    return this.emptyList;
  }

  getRange(length: number): number[] {
    return Array.from({ length }, (_, i) => i + 1);
  }

  async getByPage(page: number) {
    this.isLoading = true;
    this.roomData = await this.roomService.getAllRoomList(page);
    this.isLoading = false;
  }

  onClickChangePage(index: number) {
    this.getByPage(index)
    this.showPageList((this.pageIndex = index + 1));
  }

  showPageList(n: any) {
    let i;
    let pageList = document.getElementsByClassName(
      'page-num'
    ) as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < pageList.length; i++) {
      pageList[i].className = pageList[i].className.replace(' active', '');
    }
    pageList[this.pageIndex - 1].className += ' active';
  }
}
