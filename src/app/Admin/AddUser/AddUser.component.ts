import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AddUser',
  templateUrl: './AddUser.component.html',
  styleUrls: ['./AddUser.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickBack(){
    this.router.navigate(['admin/user']);
  }
  onClickAddNewRoom(){

  }
}
