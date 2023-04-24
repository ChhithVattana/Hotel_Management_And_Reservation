import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AddRoomType',
  templateUrl: './AddRoomType.component.html',
  styleUrls: ['./AddRoomType.component.css']
})
export class AddRoomTypeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickBack(){
    this.router.navigate(['admin/allroomtype']);
  }
}
