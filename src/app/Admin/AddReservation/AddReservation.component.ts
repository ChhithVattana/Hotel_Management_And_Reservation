import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AddReservation',
  templateUrl: './AddReservation.component.html',
  styleUrls: ['./AddReservation.component.css']
})
export class AddReservationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickBack(){
    this.router.navigate(['admin/allreservations']);
  }
  onClickAddNewRoom(){

  }
}
