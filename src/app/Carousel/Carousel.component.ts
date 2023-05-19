import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Carousel',
  templateUrl: './Carousel.component.html',
  styleUrls: ['./Carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  images: string[] = [
    '../../assets/resources/carousel/carousel-0.jpg',
    '../../assets/resources/carousel/carousel-1.jpg',
    '../../assets/resources/carousel/carousel-2.jpg',
  ];
  currentIndex = 0;
  intervalId: any;
  constructor() {}

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }

  stopCarousel(): void {
    clearInterval(this.intervalId);
  }

  isCurrentIndex(index: number): boolean {
    return this.currentIndex === index;
  }
}
