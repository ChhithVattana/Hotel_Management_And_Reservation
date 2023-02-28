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
import { ContactUSComponent } from './ContactUS/ContactUS.component';
import { DinningPageComponent } from './DinningPage/DinningPage.component';
import { BreakfastMenuComponent } from './BreakfastMenu/BreakfastMenu.component';
import { LaunchMenuComponent } from './LaunchMenu/LaunchMenu.component';
import { DinnerMenuComponent } from './DinnerMenu/DinnerMenu.component';
import { DrinkMenuComponent } from './DrinkMenu/DrinkMenu.component';
import { OurRoomPageComponent } from './OurRoomPage/OurRoomPage.component';
import { SearchBoxComponent } from './SearchBox/SearchBox.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'aboutus',
    component: AboutUSComponent,
  },
  {
    path: 'contactus',
    component: ContactUSComponent,
  },
  {
    path: 'services',
    component: ServicePageComponent,
  },
  {
    path: 'ourroom',
    component: OurRoomPageComponent,
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
  {
    path: 'dinning',
    component: DinningPageComponent,
  },
  {
    path: 'dinning/breakfast',
    component: DinningPageComponent,
    children:[
      {
        path: '',
        outlet: 'menu',
        component: BreakfastMenuComponent,
      },
    ]
  },
  {
    path: 'dinning/launch',
    component: DinningPageComponent,
    children:[
      {
        path: '',
        outlet: 'menu',
        component: LaunchMenuComponent,
      },
    ]
  },
  {
    path: 'dinning/dinner',
    component: DinningPageComponent,
    children:[
      {
        path: '',
        outlet: 'menu',
        component: DinnerMenuComponent,
      },
    ]
  },
  {
    path: 'dinning/drink',
    component: DinningPageComponent,
    children:[
      {
        path: '',
        outlet: 'menu',
        component: DrinkMenuComponent,
      },
    ]
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
      ContactUSComponent,
      DinningPageComponent,
      BreakfastMenuComponent,
      LaunchMenuComponent,
      DinnerMenuComponent,
      DrinkMenuComponent,
      OurRoomPageComponent,
      SearchBoxComponent
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
