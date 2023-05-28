import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-EditAllRooms',
  templateUrl: './EditAllRooms.component.html',
  styleUrls: ['./EditAllRooms.component.css']
})
export class EditAllRoomsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClickBack(){
    this.router.navigate(['admin/allrooms']);
  }
}
