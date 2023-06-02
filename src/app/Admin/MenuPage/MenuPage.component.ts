import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-MenuPage',
  templateUrl: './MenuPage.component.html',
  styleUrls: ['./MenuPage.component.css']
})
export class MenuPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickAllRoom(){
    this.router.navigate(['admin/allrooms']);
  }
  onClickRoomType(){
    this.router.navigate(['admin/allroomtype']);
  }
  onClickReservation(){
    this.router.navigate(['admin/allreservations']);
  }
  onClickEmployee(){
    this.router.navigate(['admin/allemployees']);
  }
  onClickBilling(){
    this.router.navigate(['admin/allrooms']);
  }
  onClickUser(){
    this.router.navigate(['admin/user']);
  }
  onClickLogout(){
    this.router.navigate(['admin']);
  }
  onClickAllReport() {
    
  }
}
