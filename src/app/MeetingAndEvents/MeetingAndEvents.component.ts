import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-MeetingAndEvents',
  templateUrl: './MeetingAndEvents.component.html',
  styleUrls: ['./MeetingAndEvents.component.css']
})
export class MeetingAndEventsComponent implements OnInit {

  scrwidth: any;
  none = 'none';
  indexs = ["1", "2", "3", "4", "5", "6", "7", "8"];
  cards = [
    {
      img:'',
      name:'',
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;

  public scrollRight(): void {
    this.scrwidth = window.screen.width;
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + this.scrwidth / 4.55,
      behavior: 'smooth',
    });
  }

  public scrollLeft(): void {
    this.scrwidth = window.screen.width;
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - this.scrwidth / 4.55,
      behavior: 'smooth',
    });
  }

  onClickNavigate(item: any){
    this.router.navigate([`explore/${item.id}/${item.name}`]);
  }

  onClickMob(){
    this.router.navigate(['/explore/01/Mob%20Lab'])
  }
}
