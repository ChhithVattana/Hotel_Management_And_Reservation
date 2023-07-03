import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from 'src/app/Service/AuthGaurd.service';

@Component({
  selector: 'app-EditPicRoomType',
  templateUrl: './EditPicRoomType.component.html',
  styleUrls: ['./EditPicRoomType.component.css'],
})
export class EditPicRoomTypeComponent implements OnInit {
  canAccess: Boolean = false;
  constructor(
    private authGuardService: AuthGaurdService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.authGuardService.canAccess()) {
      this.getUserInfo();
      this.canAccess = this.authGuardService.canAccess();
    } else {
      this.router.navigate(['login']);
    }
  }
  username: string = '';

  // get user info
  getUserInfo() {
    this.username = this.authGuardService.getUserName();
  }
}
