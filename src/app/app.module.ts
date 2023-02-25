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

import { AboutUSComponent } from './AboutUS/AboutUS.component';
import { HotelFacilitiesComponent } from './HotelFacilities/HotelFacilities.component';

import { OurServiceComponent } from './OurService/OurService.component';
import { ServicePageComponent } from './ServicePage/ServicePage.component';
import { ServiceContentPageComponent } from './ServiceContentPage/ServiceContentPage.component';
import { MeetingAndEventPageComponent } from './MeetingAndEventPage/MeetingAndEventPage.component';
import { MeetingAndEventContentPageComponent } from './MeetingAndEventContentPage/MeetingAndEventContentPage.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutUSComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'services',
    component: ServicePageComponent,
  },
  {
    path: 'services/content',
    component: ServiceContentPageComponent,
  },
  {
    path: 'meeting&event',
    component: MeetingAndEventPageComponent,
  },
  {
    path: 'meeting&event/content',
    component: MeetingAndEventContentPageComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    HomePageComponent,
    MeetingAndEventsComponent,
    RoomsComponent,
    AboutUSComponent,
    HotelFacilitiesComponent,
    OurServiceComponent,
    ServicePageComponent,
    ServiceContentPageComponent,
    MeetingAndEventPageComponent,
    MeetingAndEventContentPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
