import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from 'src/app/Service/AuthGaurd.service';

@Component({
  selector: 'app-EditAllEmployees',
  templateUrl: './EditAllEmployees.component.html',
  styleUrls: ['./EditAllEmployees.component.css'],
})
export class EditAllEmployeesComponent implements OnInit {
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
