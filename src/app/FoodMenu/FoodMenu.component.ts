import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodMenuServiceService } from '../Services/FoodMenuService.service';

@Component({
  selector: 'app-FoodMenu',
  templateUrl: './FoodMenu.component.html',
  styleUrls: ['./FoodMenu.component.css'],
})
export class FoodMenuComponent implements OnInit {

  data: any
  tmp: any

  constructor(
    private route: ActivatedRoute,
    private _data: FoodMenuServiceService
  ) {}

  ngOnInit() {
    // this.data = this._data.getAllData().forEach((element) => {
    //   if (this.route.snapshot.params['name'] == element.id) {
    //     console.log(element)
    //     this.data = element;
    //   }
    // });
    this.tmp = this._data.getAllData()
    this.tmp.forEach((element: any) => {
      if (element.id != this.route.snapshot.params['name']) {
        element = null
      }
    })
    this.data = this.tmp
  }
}
