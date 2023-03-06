import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-OurRoomPage',
  templateUrl: './OurRoomPage.component.html',
  styleUrls: ['./OurRoomPage.component.css']
})
export class OurRoomPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickNavigate(){
    this.router.navigate(['/ourroom/content']);
  }
}
