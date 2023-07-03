import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseModel } from 'src/app/Model/ResponseModel';
import { RoomTypeModel } from 'src/app/Model/RoomTypeModel';
import { AuthGaurdService } from 'src/app/Service/AuthGaurd.service';
import { RoomServicesService } from 'src/app/Service/RoomServices.service';

@Component({
  selector: 'app-AllRoomType',
  templateUrl: './AllRoomType.component.html',
  styleUrls: ['./AllRoomType.component.css'],
})
export class AllRoomTypeComponent implements OnInit {
  response: ResponseModel<RoomTypeModel[]> = new ResponseModel<RoomTypeModel[]>(
    [],
    0
  );
  emptyList: number = 0;
  isLoading: boolean = true;
  pageIndex = 1;
  canAccess: Boolean = false;
  searchTerm: string = '';

  constructor(
    private router: Router,
    private roomTypeService: RoomServicesService,
    private authGuardService: AuthGaurdService
  ) {}

  async ngOnInit() {
    this.response = await this.roomTypeService.getAllRoomTypeList(0);
    setTimeout(() => {
      this.getUserInfo();
      this.canAccess = this.authGuardService.canAccess();
      this.isLoading = false;
    }, 800);
  }

  onClickAddRoomType() {
    this.router.navigate(['admin/allroomtype/addroomtype']);
  }

  getEmptyList(): number {
    this.emptyList = 10 - this.response.result.length;
    return this.emptyList;
  }

  getloadedList(): number {
    // បង្គត់លេខឡើង 1.1 -> 2 | 2.9 -> 3
    return Math.ceil(this.response.length / 10);
  }

  getRange(length: number): number[] {
    return Array.from({ length }, (_, i) => i + 1);
  }

  async getByPage(page: number) {
    this.isLoading = true;
    this.response = await this.roomTypeService.getAllRoomTypeList(page);
    setTimeout(() => {
      this.isLoading = false;
    }, 800);
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
  // search box
  search() {
    // Perform search functionality using the searchTerm
    console.log('Searching for:', this.searchTerm);
  }

  clearSearch() {
    this.searchTerm = '';
  }

  username: string = '';

  // get user info
  getUserInfo() {
    this.username = this.authGuardService.getUserName();
  }
}
