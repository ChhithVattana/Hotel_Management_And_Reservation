import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from 'src/app/Service/AuthGaurd.service';

@Component({
  selector: 'app-AllRooms',
  templateUrl: './AllRooms.component.html',
  styleUrls: ['./AllRooms.component.css']
})
export class AllRoomsComponent implements OnInit {

  constructor(private router: Router, private auth: AuthGaurdService) { }

  ngOnInit() {
    this.auth.canAccess()
  }

  onClickAddRoom(){
    this.router.navigate(['admin/allrooms/editallrooms']);
  }
}
