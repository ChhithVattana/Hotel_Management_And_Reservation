import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hotel_Management_And_Reservation';

  constructor(private router: Router){}

  showNavigationBar(): boolean {
    const currentUrl = this.router.url;
    if(currentUrl.includes('reservation')){
      return false;
    }
    return true;
  }
}
