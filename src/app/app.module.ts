import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './NavigationBar/NavigationBar.component';
import { FooterComponent } from './Footer/Footer.component';
import { HomePageComponent } from './HomePage/HomePage.component';
import { MeetingAndEventsComponent } from './MeetingAndEvents/MeetingAndEvents.component';
import { RoomsComponent } from './Rooms/Rooms.component';

import { AboutUSComponent } from './AboutUS/AboutUS.component';
import { HotelFacilitiesComponent } from './HotelFacilities/HotelFacilities.component';
import { LoginPageComponent } from './Admin/LoginPage/LoginPage.component';
import { MenuPageComponent } from './Admin/MenuPage/MenuPage.component';
import { AllRoomsComponent } from './Admin/AllRooms/AllRooms.component';
import { AllReservationComponent } from './Admin/AllReservation/AllReservation.component';
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
import { RoomContentPageComponent } from './RoomContentPage/RoomContentPage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CarouselComponent } from './Carousel/Carousel.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HttpClientModule } from '@angular/common/http';
import { EditAllRoomsComponent } from './Admin/EditAllRooms/EditAllRooms.component';
import { AddRoomTypeComponent } from './Admin/AddRoomType/AddRoomType.component';
import { EditRoomsTypeComponent } from './Admin/EditRoomsType/EditRoomsType.component';
import { EditPicRoomTypeComponent } from './Admin/EditPicRoomType/EditPicRoomType.component';
import { AllRoomTypeComponent } from './Admin/AllRoomType/AllRoomType.component';
import { AllEmployeesComponent } from './Admin/AllEmployees/AllEmployees.component';
import { AddAllEmployeesComponent } from './Admin/AddAllEmployees/AddAllEmployees.component';
import { EditAllEmployeesComponent } from './Admin/EditAllEmployees/EditAllEmployees.component';
import { UserComponent } from './Admin/User/User.component';
import { AddUserComponent } from './Admin/AddUser/AddUser.component';
import { DoneComponent } from './Admin/Confirmation/Done/Done.component';
import { SaveComponent } from './Admin/Confirmation/Save/Save.component';
import { DeleteComponent } from './Admin/Confirmation/Delete/Delete.component';
import { LoadingPageComponent } from './LoadingPage/LoadingPage.component';
import { AuthService } from './Service/Auth.service';
import { AuthGaurdService } from './Service/AuthGaurd.service';
import { ReservationPageComponent } from './ReservationPage/ReservationPage.component';
import { AddReservationComponent } from './Admin/AddReservation/AddReservation.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoadingPageComponent,
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
    path: 'ourroom',
    component: OurRoomPageComponent,
  },
  {
    path: 'ourroom/content/:id',
    component: RoomContentPageComponent,
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
  {
    path: 'dinning',
    component: DinningPageComponent,
  },
  {
    path: 'dinning/breakfast',
    component: DinningPageComponent,
    children: [
      {
        path: '',
        outlet: 'menu',
        component: BreakfastMenuComponent,
      },
    ],
  },
  {
    path: 'dinning/launch',
    component: DinningPageComponent,
    children: [
      {
        path: '',
        outlet: 'menu',
        component: LaunchMenuComponent,
      },
    ],
  },
  {
    path: 'dinning/dinner',
    component: DinningPageComponent,
    children: [
      {
        path: '',
        outlet: 'menu',
        component: DinnerMenuComponent,
      },
    ],
  },
  {
    path: 'dinning/drink',
    component: DinningPageComponent,
    children: [
      {
        path: '',
        outlet: 'menu',
        component: DrinkMenuComponent,
      },
    ],
  },
  {
    path: 'reservation/searchAvailable',
    component: ReservationPageComponent,
  },
  {
    path: 'reservation/searchAvailable?checkInOn=:dateIn&checkOutOn=:dateOut&adults=:adults&rooms=:rooms&isAvailable=true',
    component: ReservationPageComponent,
  },
  {
    path: 'admin',
    component: LoginPageComponent,
  },
  {
    path: 'admin/allrooms',
    component: AllRoomsComponent,
  },
  {
    path: 'admin/menupage',
    component: MenuPageComponent,
  },
  {
    path: 'admin/allrooms/editallrooms',
    component: EditAllRoomsComponent,
  },
  {
    path: 'admin/allroomtype',
    component: AllRoomTypeComponent,
  },
  {
    path: 'admin/allroomtype/addroomtype',
    component: AddRoomTypeComponent,
  },
  {
    path: 'admin/editroomtype',
    component: EditRoomsTypeComponent,
  },
  {
    path: 'admin/editpicroomtype',
    component: EditPicRoomTypeComponent,
  },
  {
    path: 'admin/allemployees',
    component: AllEmployeesComponent,
  },
  {
    path: 'admin/editallemployees',
    component: EditAllEmployeesComponent,
  },
  {
    path: 'admin/allemployees/addallemployees',
    component: AddAllEmployeesComponent,
  },
  {
    path: 'admin/allreservations',
    component: AllReservationComponent,
  },
  {
    path: 'admin/allreservations/addreservation',
    component: AddReservationComponent,
  },
  {
    path: 'admin/user',
    component: UserComponent,
  },
  {
    path: 'admin/user/adduser',
    component: AddUserComponent,
  },
  {
    path: 'admin/done',
    component: DoneComponent,
  },
  {
    path: 'admin/save',
    component: SaveComponent,
  },
  {
    path: 'admin/delete',
    component: DeleteComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoadingPageComponent,
    NavigationBarComponent,
    FooterComponent,
    HomePageComponent,
    MeetingAndEventsComponent,
    RoomsComponent,
    AboutUSComponent,
    ReservationPageComponent,
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
    SearchBoxComponent,
    RoomContentPageComponent,
    CarouselComponent,
    MenuPageComponent,
    AllRoomsComponent,
    EditAllRoomsComponent,
    AllRoomTypeComponent,
    AddRoomTypeComponent,
    EditRoomsTypeComponent,
    EditPicRoomTypeComponent,
    LoginPageComponent,
    AllEmployeesComponent,
    AllReservationComponent,
    AddAllEmployeesComponent,
    EditAllEmployeesComponent,
    UserComponent,
    AddUserComponent,
    AddReservationComponent,
    DoneComponent,
    SaveComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'top',
    }),
    BrowserAnimationsModule,
  ],
  providers: [DatePipe, AuthService, AuthGaurdService],
  bootstrap: [AppComponent],
})
export class AppModule {}
