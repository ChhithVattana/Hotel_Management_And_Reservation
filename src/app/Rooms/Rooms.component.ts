import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-Rooms',
  templateUrl: './Rooms.component.html',
  styleUrls: ['./Rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  scrWidth: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    return (this.scrWidth = window.innerWidth);
  }

  constructor(private router: Router) {}

  ngOnInit() {}

  onClickNavigate() {
    this.router.navigate(['/ourroom/content']);
  }
}
