import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseModel } from 'src/app/Model/ResponseModel';
import { RoomModel } from 'src/app/Model/RoomModel';
import { AuthGaurdService } from 'src/app/Service/AuthGaurd.service';
import { RoomServicesService } from 'src/app/Service/RoomServices.service';

@Component({
  selector: 'app-AllRooms',
  templateUrl: './AllRooms.component.html',
  styleUrls: ['./AllRooms.component.css'],
})
export class AllRoomsComponent implements OnInit {
  emptyList: number = 0;
  isLoading: boolean = true;
  pageIndex = 1;
  response: ResponseModel<RoomModel[]> = new ResponseModel<RoomModel[]>([], 0);

  constructor(
    private router: Router,
    private roomService: RoomServicesService
  ) {}

  async ngOnInit() {
    this.response = await this.roomService.getAllRoomList(0);
    this.isLoading = false;
  }

  onClickAddRoom() {
    this.router.navigate(['admin/allrooms/editallrooms']);
  }

  getEmptyList(): number {
    this.emptyList = 10 - this.response.result.length;
    return this.emptyList;
  }

  getloadedList(): number {
    return this.response.length / 10;
  }

  getRange(length: number): number[] {
    return Array.from({ length }, (_, i) => i + 1);
  }

  async getByPage(page: number) {
    this.isLoading = true;
    this.response = await this.roomService.getAllRoomList(page);
    this.isLoading = false;
  }

  onClickChangePage(index: number) {
    this.getByPage(index);
    this.showPageList((this.pageIndex = index + 1));
  }

  navigatePage(n: any) {
    this.showPageList((this.pageIndex += n));
    this.getByPage(this.pageIndex - 1);
  }

  showPageList(n: any) {
    let i;
    let pages = document.getElementsByClassName(
      'page-num'
    ) as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName(
      'page-num'
    ) as HTMLCollectionOf<HTMLElement>;
    if (n > pages.length) {
      this.pageIndex = 1;
    }
    if (n < 1) {
      this.pageIndex = pages.length;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[this.pageIndex - 1].className += ' active';
  }
}
