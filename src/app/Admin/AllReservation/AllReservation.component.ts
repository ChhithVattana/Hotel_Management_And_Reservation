import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AllReservation',
  templateUrl: './AllReservation.component.html',
  styleUrls: ['./AllReservation.component.css']
})
export class AllReservationComponent implements OnInit {

  constructor(private rotuer: Router) { }

  ngOnInit() {
  }

  onClickAddReservation(){
    this.rotuer.navigate(['/admin/allreservations/addreservation'])
  }
}
