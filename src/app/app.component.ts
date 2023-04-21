import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Service/Auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'Hotel_Management_And_Reservation';

  constructor(private router: Router, private auth: AuthService){}

  async ngOnInit() {
    console.log('app component webclient worked')
    await this.auth.webClient()
  }

  showNavigationBar(): boolean {
    const currentUrl = this.router.url;
    if(currentUrl.includes('reservation')){
      return false;
    }
    return true;
  }
}
