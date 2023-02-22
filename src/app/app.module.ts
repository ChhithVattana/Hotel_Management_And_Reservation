import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './NavigationBar/NavigationBar.component';
import { FooterComponent } from './Footer/Footer.component';
import { HomePageComponent } from './HomePage/HomePage.component';
import { MeetingAndEventsComponent } from './MeetingAndEvents/MeetingAndEvents.component';
import { RoomsComponent } from './Rooms/Rooms.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [		
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    HomePageComponent,
      MeetingAndEventsComponent,
      RoomsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
