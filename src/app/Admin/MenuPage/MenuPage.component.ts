import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from 'src/app/Service/AuthGaurd.service';

@Component({
  selector: 'app-MenuPage',
  templateUrl: './MenuPage.component.html',
  styleUrls: ['./MenuPage.component.css']
})
export class MenuPageComponent implements OnInit {

  canAccess: Boolean = false;

  constructor(private router: Router, private authGuard: AuthGaurdService) { }

  ngOnInit() {
    this.authGuard.canActivate();
    this.canAccess = this.authGuard.canAccess()
  }

  onClickDashboard(){
    this.router.navigate(['admin/dashboard']);
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
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['login']);
  }
  onClickAllReport() {

  }
}
