import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Rooms',
  templateUrl: './Rooms.component.html',
  styleUrls: ['./Rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickNavigate(){
    this.router.navigate(['/ourroom/content']);
  }
}
