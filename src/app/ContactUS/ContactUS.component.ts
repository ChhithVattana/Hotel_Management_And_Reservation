import { Component, OnInit } from '@angular/core';
import { AuthGaurdService } from '../Service/AuthGaurd.service';

@Component({
  selector: 'app-ContactUS',
  templateUrl: './ContactUS.component.html',
  styleUrls: ['./ContactUS.component.css'],
})
export class ContactUSComponent implements OnInit {
  constructor(private authGuard: AuthGaurdService) {}

  ngOnInit() {
    this.authGuard.canActivate();
  }
}
