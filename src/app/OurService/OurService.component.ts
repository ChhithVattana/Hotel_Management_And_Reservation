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
    url : "https://s3-alpha-sig.figma.com/img/d0a9/beca/c8dca55718bf1c9f532482fbc05b34cf?Expires=1689552000&Signature=etPmi5xq2N3GYq9XocJnqC1MnmNr0~H~IHMXnyEbbCvrf3WJN~n1R-mb0LiKlw6hJt46B48nmGHXz1dvO5nlaPRTa40mdispInzTydng1W5v1IH0XeTp39xXtw5hHw1b4NTg8MLe4BuxxUtQ5C69h6gexldLwgcwdjyCHetqxpbhT1vPUU3EOgC5kK7VnBVPbRhNCFQVhhhmTxh3z6rTJOZNNGmy2HDTzCixbwqqhff-ZG8xU4MOpnw0m8S34zpRLjEfHGH7hcohZFssfoBNznuaZ7ABDR06S8~hKn4TakWsldR4nI0lB8spoahSzdmGIk4qYVK3u-fg4tRwbXUrcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title : "CATERED JUST FOR YOU",
   },
   {
    url : "../../assets/resources/service/ser5.jpg",
    title : "FITNESS CENTRE"
   },
   {
    url : "../../assets/resources/service/ser.jpg",
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
