import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-HomePage',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickRestaurant() {
    this.router.navigate(['/dinning']);
  }

  onClickAboutUs() {
    this.router.navigate(['/aboutus']);
  }

  onClickOurRoom() {
    this.router.navigate(['/ourroom']);
  }
}
