import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-MeetingAndEventPage',
  templateUrl: './MeetingAndEventPage.component.html',
  styleUrls: ['./MeetingAndEventPage.component.css']
})
export class MeetingAndEventPageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onClickNagivate(){
    this._router.navigate(['meeting&event/content'])
  }
}
