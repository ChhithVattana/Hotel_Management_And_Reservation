import { Component, OnInit } from '@angular/core';
import { AuthGaurdService } from '../Service/AuthGaurd.service';

@Component({
  selector: 'app-AboutUS',
  templateUrl: './AboutUS.component.html',
  styleUrls: ['./AboutUS.component.css'],
})
export class AboutUSComponent implements OnInit {
  constructor(private authGuard: AuthGaurdService) {}

  ngOnInit() {
    this.authGuard.canActivate();
  }
}
