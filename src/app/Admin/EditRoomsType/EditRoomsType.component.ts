import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from 'src/app/Service/AuthGaurd.service';

@Component({
  selector: 'app-EditRoomsType',
  templateUrl: './EditRoomsType.component.html',
  styleUrls: ['./EditRoomsType.component.css'],
})
export class EditRoomsTypeComponent implements OnInit {
  canAccess: Boolean = false;
  constructor(
    private router: Router,
    private authGuardService: AuthGaurdService
  ) {}

  ngOnInit() {
    if (this.authGuardService.canAccess()) {
      this.getUserInfo();
      this.canAccess = this.authGuardService.canAccess();
    } else {
      this.router.navigate(['login']);
    }
  }
  onClickBack() {
    this.router.navigate(['admin/allrooms']);
  }
  onClickAddNewRoom() {}
  username: string = '';

  // get user info
  getUserInfo() {
    this.username = this.authGuardService.getUserName();
  }
}
