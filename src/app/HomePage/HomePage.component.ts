import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/Auth.service';

@Component({
  selector: 'app-HomePage',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
  }

  onClickRestaurant() {
    this.router.navigate(['/dinning']);
  }

  onClickAboutUs() {
    this.router.navigate(['/aboutus']);
  }
}
