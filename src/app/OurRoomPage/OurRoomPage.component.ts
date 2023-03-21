import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomModel } from '../Model/RoomModel';
import { RoomServicesService } from '../Service/RoomServices.service';

@Component({
  selector: 'app-OurRoomPage',
  templateUrl: './OurRoomPage.component.html',
  styleUrls: ['./OurRoomPage.component.css']
})
export class OurRoomPageComponent implements OnInit {

  data: RoomModel[] = [];

  constructor(private router: Router, private roomData: RoomServicesService) { }

  ngOnInit() {
    this.data = this.roomData.getAllRoom();
  }

  onClickNavigate(){
    this.router.navigate(['/ourroom/content']);
  }
  onClickNavigateTest(room: any){
    this.router.navigate([`/ourroom/content/${room.id}`]);
  }
}
