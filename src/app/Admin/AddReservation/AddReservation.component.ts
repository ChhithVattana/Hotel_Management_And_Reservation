import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from 'src/app/Service/AuthGaurd.service';

@Component({
  selector: 'app-AddReservation',
  templateUrl: './AddReservation.component.html',
  styleUrls: ['./AddReservation.component.css'],
})
export class AddReservationComponent implements OnInit {
  isLoading: boolean = true;
  searchTerm: string = '';
  canAccess: Boolean = false;

  constructor(
    private router: Router,
    private authGuardService: AuthGaurdService
  ) {}

  ngOnInit() {
    this.getUserInfo();
    this.canAccess = this.authGuardService.canAccess();
  }

  onClickBack() {
    this.router.navigate(['admin/allreservations']);
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
