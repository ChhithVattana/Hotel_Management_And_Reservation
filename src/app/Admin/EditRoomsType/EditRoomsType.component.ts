import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-EditRoomsType',
  templateUrl: './EditRoomsType.component.html',
  styleUrls: ['./EditRoomsType.component.css']
})
export class EditRoomsTypeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClickBack(){
    this.router.navigate(['admin/allrooms']);
  }
  onClickAddNewRoom(){

  }
}
