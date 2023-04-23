import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../Service/AuthGaurd.service';

@Component({
  selector: 'app-ServicePage',
  templateUrl: './ServicePage.component.html',
  styleUrls: ['./ServicePage.component.css'],
})
export class ServicePageComponent implements OnInit {
  constructor(private _router: Router, private authGuard: AuthGaurdService) {}

  ngOnInit() {
    this.authGuard.canActivate();
  }

  onClickNavigate() {
    this._router.navigate(['services/content']);
  }
}
