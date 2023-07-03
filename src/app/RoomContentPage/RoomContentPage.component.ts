import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageModel } from '../Model/ImageModel';
import { RoomModel } from '../Model/RoomModel';
import { ImageService } from '../Service/Image.service';
import { RoomServicesService } from '../Service/RoomServices.service';
import { RoomTypeModel } from '../Model/RoomTypeModel';

@Component({
  selector: 'app-RoomContentPage',
  templateUrl: './RoomContentPage.component.html',
  styleUrls: ['./RoomContentPage.component.css'],
})
export class RoomContentPageComponent implements OnInit {
  slideIndex = 1;
  roomData: RoomTypeModel[] = [];
  imageData: ImageModel[] = [];
  activeImage: ImageModel[] = [];

  constructor(
    private _roomData: RoomServicesService,
    private _imageData: ImageService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.roomData = await this._roomData.getRoomById(
      this.route.snapshot.params['id']
    );
    this.imageData = this._imageData.getImageById(
      this.route.snapshot.params['id']
    );
  }

  getNewRoomDetail(newRoom: any) {
    this.roomData = [];
    this.roomData = newRoom;
  }

  currentSlide(n: any) {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n: any) {
    let i;
    let slides = document.getElementsByClassName(
      'mySlides'
    ) as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName(
      'demo'
    ) as HTMLCollectionOf<HTMLElement>;
    let captionText = document.getElementById('caption');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
    if (captionText != null) {
      captionText.innerHTML = (
        dots[this.slideIndex - 1] as HTMLInputElement
      ).alt;
    }
  }
}
