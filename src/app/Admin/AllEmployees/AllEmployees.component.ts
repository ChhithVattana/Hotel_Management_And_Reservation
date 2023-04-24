import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AllEmployees',
  templateUrl: './AllEmployees.component.html',
  styleUrls: ['./AllEmployees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickEmployees(){
    this.router.navigate(['admin/allemployees/addallemployees']);
  }
}
