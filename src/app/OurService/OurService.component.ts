import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-OurService',
  templateUrl: './OurService.component.html',
  styleUrls: ['./OurService.component.css']
})
export class OurServiceComponent implements OnInit {
 data = [
   {
    url : "../../assets/resources/service/ser.jpg",
    title : "Swimming Pool",
   },
   {
    url : "../../assets/resources/service/ser2.png",
    title : "TRANSPORT SERVICES",
   },
   {
    url : "../../assets/resources/service/ser3.jpg",
    title : "The Spa",
   },
   {
    url : "../../assets/resources/service/ser4.jpg",
    title : "CATERED JUST FOR YOU",
   },
   {
    url : "../../assets/resources/service/ser5.jpg",
    title : "FITNESS CENTRE"
   },
   {
    url : "../../assets/resources/service/ser6.jpg",
    title : "Swimming Pool",
   },
 ]

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onClickNavigate() {
    this._router.navigate(['services'])
  }
}
