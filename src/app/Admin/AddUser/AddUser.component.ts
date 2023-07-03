import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/Model/CustomModel/UserDto';
import { UserService } from 'src/app/Service/User.service';
import { AuthGaurdService } from 'src/app/Service/AuthGaurd.service';

@Component({
  selector: 'app-AddUser',
  templateUrl: './AddUser.component.html',
  styleUrls: ['./AddUser.component.css'],
})
export class AddUserComponent implements OnInit {
  isLoading: boolean = true;
  searchTerm: string = '';
  canAccess: Boolean = false;
  form: FormGroup;

  constructor(
    private router: Router,
    private authGuardService: AuthGaurdService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    if (this.authGuardService.canAccess()) {
      this.getUserInfo();
      this.canAccess = this.authGuardService.canAccess();
    } else {
      this.router.navigate(['login']);
    }
  }

  onClickBack() {
    this.router.navigate(['admin/user']);
  }

  async onSubmit() {
    await this.userService.addNewUser(
      new UserDto(
        this.form.value.username,
        this.form.value.password,
        this.form.value.role
      )
    );
  }

  // search box
  search() {
    // Perform search functionality using the searchTerm
    console.log('Searching for:', this.searchTerm);
  }

  clearSearch() {
    this.searchTerm = '';
  }

  username: string = '';

  // get user info
  getUserInfo() {
    this.username = this.authGuardService.getUserName();
  }
}
