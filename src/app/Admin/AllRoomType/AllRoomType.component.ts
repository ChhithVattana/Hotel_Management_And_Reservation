import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AllRoomType',
  templateUrl: './AllRoomType.component.html',
  styleUrls: ['./AllRoomType.component.css']
})
export class AllRoomTypeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickAddRoomType() {
    this.router.navigate(['admin/allroomtype/addroomtype']);
  }
}
