import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ServiceContentPage',
  templateUrl: './ServiceContentPage.component.html',
  styleUrls: ['./ServiceContentPage.component.css']
})
export class ServiceContentPageComponent implements OnInit {

  slideIndex = 1;

  constructor() { }

  ngOnInit() {
  }

  plusSlides(n: any) {
    this.showSlides((this.slideIndex += n));
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
