import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AddAllEmployees',
  templateUrl: './AddAllEmployees.component.html',
  styleUrls: ['./AddAllEmployees.component.css']
})
export class AddAllEmployeesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickBack(){
    this.router.navigate(['admin/allemployees']);
  }
  onClickAddNewRoom(){

  }
}
