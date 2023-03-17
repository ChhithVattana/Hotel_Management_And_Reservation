import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-HomePage',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("Hello")
  }

  ngDoCheck(){
    console.log("do check")
  }

  ngAfterViewInit(){
    console.log("after view init")
  }

  onClickRestaurant() {
    this.router.navigate(['/dinning']);
  }

  onClickAboutUs() {
    this.router.navigate(['/aboutus']);
  }

  isLoaded(): boolean {
    console.log("is loaded")
    return true;
  }
}
