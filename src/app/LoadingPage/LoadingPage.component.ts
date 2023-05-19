import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-LoadingPage',
  templateUrl: './LoadingPage.component.html',
  styleUrls: ['./LoadingPage.component.css']
})
export class LoadingPageComponent implements OnInit {

  isLoading: boolean = true;
  token: any = null;

  constructor(private router: Router ,private authService: AuthService) { }

  async ngOnInit() {
    if(!this.authService.isAuthenticated()) {
      await this.authService.webClient();
    }
    this.isLoading = false;
    this.router.navigate(['/home']);
  }
}
