import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from 'src/app/Service/AuthGaurd.service';

@Component({
  selector: 'app-AddRoomType',
  templateUrl: './AddRoomType.component.html',
  styleUrls: ['./AddRoomType.component.css'],
})
export class AddRoomTypeComponent implements OnInit {
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
    this.router.navigate(['admin/allroomtype']);
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
    getUserInfo(){
      this.username = this.authGuardService.getUserName();
    }
}
