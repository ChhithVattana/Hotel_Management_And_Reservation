import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModel } from 'src/app/Model/EmployeeModel';
import { ResponseModel } from 'src/app/Model/ResponseModel';
import { EmployeeService } from 'src/app/Service/Employee.service';

@Component({
  selector: 'app-AllEmployees',
  templateUrl: './AllEmployees.component.html',
  styleUrls: ['./AllEmployees.component.css'],
})
export class AllEmployeesComponent implements OnInit {
  emptyList: number = 0;
  isLoading: boolean = true;
  pageIndex = 1;
  response: ResponseModel<EmployeeModel[]> = new ResponseModel<EmployeeModel[]>(
    [],
    0
  );

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  async ngOnInit() {
    this.response = await this.employeeService.getAllEmployeeList(0);
    setTimeout(() => {
      this.isLoading = false;
    }, 800);
  }

  onClickEmployees() {
    this.router.navigate(['admin/allemployees/addallemployees']);
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
    this.response = await this.employeeService.getAllEmployeeList(page);
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
}