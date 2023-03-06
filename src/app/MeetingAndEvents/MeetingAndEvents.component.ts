import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-MeetingAndEvents',
  templateUrl: './MeetingAndEvents.component.html',
  styleUrls: ['./MeetingAndEvents.component.css']
})
export class MeetingAndEventsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickNavigate() {
    this.router.navigate(['/meeting&event/content']);
  }
}
