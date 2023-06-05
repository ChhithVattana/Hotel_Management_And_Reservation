import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { LoginModel } from 'src/app/Model/Login';
import { AuthService } from 'src/app/Service/Auth.service';

@Component({
  selector: 'app-LoginPage',
  templateUrl: './LoginPage.component.html',
  styleUrls: ['./LoginPage.component.css'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  async onSubmit() {
    this.isLoading = true;
    await this.authService.login(
      new LoginModel(this.form.value.username, this.form.value.password)
    );
  }
}
