import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-OurService',
  templateUrl: './OurService.component.html',
  styleUrls: ['./OurService.component.css']
})
export class OurServiceComponent implements OnInit {

  image: string[] = [
    "../../assets/resources/service/ser.jpg",
    "../../assets/resources/service/ser2.png",
    "../../assets/resources/service/ser1.jpg",
    "../../assets/resources/service/ser3.jpg",
    "../../assets/resources/service/ser4.jpg",
    "../../assets/resources/service/ser5.jpg",
  ]

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onClickNavigate() {
    this._router.navigate(['services'])
  }
}
