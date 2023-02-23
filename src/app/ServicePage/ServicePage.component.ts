import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ServicePage',
  templateUrl: './ServicePage.component.html',
  styleUrls: ['./ServicePage.component.css']
})
export class ServicePageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onClickNavigate() {
    this._router.navigate(['services/content'])
  }
}
