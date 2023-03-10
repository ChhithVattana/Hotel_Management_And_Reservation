import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-MeetingAndEventPage',
  templateUrl: './MeetingAndEventPage.component.html',
  styleUrls: ['./MeetingAndEventPage.component.css'],
})
export class MeetingAndEventPageComponent implements OnInit {
  num: any;
  scrWidth: any;

  constructor(private _router: Router) {}

  ngOnInit() {
    this.getScreenSize();
  }

  onClickNagivate() {
    this._router.navigate(['meeting&event/content']);
  }

  getScreenSize() {
    this.scrWidth = window.innerWidth;
    if (this.scrWidth < 600) {
      return this.num = 1
    } else {
      return this.num = 2
    }
  }
}
