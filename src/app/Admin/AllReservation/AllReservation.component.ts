import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseModel } from 'src/app/Model/ResponseModel';
import { TransactionModel } from 'src/app/Model/TransactionModel';
import { TransactionService } from 'src/app/Service/Transaction.service';

@Component({
  selector: 'app-AllReservation',
  templateUrl: './AllReservation.component.html',
  styleUrls: ['./AllReservation.component.css'],
})
export class AllReservationComponent implements OnInit {
  emptyList: number = 0;
  isLoading: boolean = true;
  pageIndex = 1;
  response: ResponseModel<TransactionModel[]> = new ResponseModel<
    TransactionModel[]
  >([], 0);

  constructor(private rotuer: Router, private transactionService: TransactionService) {}

  async ngOnInit() {
    this.response = await this.transactionService.getAllReservationList(0);
    this.isLoading = false
  }

  onClickAddReservation() {
    this.rotuer.navigate(['/admin/allreservations/addreservation']);
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
    this.response = await this.transactionService.getAllReservationList(page);
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
