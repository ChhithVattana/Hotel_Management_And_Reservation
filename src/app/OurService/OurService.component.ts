import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-OurService',
  templateUrl: './OurService.component.html',
  styleUrls: ['./OurService.component.css']
})
export class OurServiceComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onClickNavigate() {
    this._router.navigate(['services'])
  }
}
