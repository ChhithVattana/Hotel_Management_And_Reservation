import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickAddUser(){
    this.router.navigate(['admin/user/adduser']);
  }

}
