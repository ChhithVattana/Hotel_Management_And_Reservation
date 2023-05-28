import { Component, OnInit } from '@angular/core';
import { AuthGaurdService } from '../Service/AuthGaurd.service';

@Component({
  selector: 'app-DinningPage',
  templateUrl: './DinningPage.component.html',
  styleUrls: ['./DinningPage.component.css'],
})
export class DinningPageComponent implements OnInit {
  constructor(private authGuard: AuthGaurdService) {}

  ngOnInit() {
    this.authGuard.canActivate();
  }
}
