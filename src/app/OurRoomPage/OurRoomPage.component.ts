import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomModel } from '../Model/RoomModel';
import { RoomServicesService } from '../Service/RoomServices.service';
import { RoomTypeModel } from '../Model/RoomTypeModel';
import { AuthGaurdService } from '../Service/AuthGaurd.service';

@Component({
  selector: 'app-OurRoomPage',
  templateUrl: './OurRoomPage.component.html',
  styleUrls: ['./OurRoomPage.component.css'],
})
export class OurRoomPageComponent implements OnInit {
  data: RoomTypeModel[] = [];

  constructor(
    private router: Router,
    private roomData: RoomServicesService,
    private authGuard: AuthGaurdService
  ) {}

  async ngOnInit() {
    this.authGuard.canActivate()
    this.data = await this.roomData.getAllRoom();
  }

  onClickNavigateTest() {
    this.router.navigate(['/ourroom/content']);
  }
  onClickNavigate(room: any) {
    this.router.navigate([`/ourroom/content/${room.id}`]);
  }
}
