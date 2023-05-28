import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AllRooms',
  templateUrl: './AllRooms.component.html',
  styleUrls: ['./AllRooms.component.css']
})
export class AllRoomsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickAddRoom(){
    this.router.navigate(['admin/allrooms/editallrooms']);
  }
}
