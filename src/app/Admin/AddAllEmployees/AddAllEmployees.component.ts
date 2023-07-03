import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from 'src/app/Service/AuthGaurd.service';

@Component({
  selector: 'app-AddAllEmployees',
  templateUrl: './AddAllEmployees.component.html',
  styleUrls: ['./AddAllEmployees.component.css'],
})
export class AddAllEmployeesComponent implements OnInit {
  isLoading: boolean = true;
  searchTerm: string = '';
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
    this.router.navigate(['admin/allemployees']);
  }
  onClickAddNewRoom() {}

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
