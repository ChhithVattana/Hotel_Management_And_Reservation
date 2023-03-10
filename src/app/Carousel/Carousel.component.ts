import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Carousel',
  templateUrl: './Carousel.component.html',
  styleUrls: ['./Carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  images: string[] = [
    'https://s3-alpha-sig.figma.com/img/cab3/1287/f8f9830b8f4491e627b8e726aa554ef7?Expires=1679270400&Signature=btjGkUCZ7Y48HW4NaXf0RqTRqPZ6O2YZTx0u5ozKVDZttUw1HtlZuXSoqiq3LyY1XdGJFhD9GjPR7zbPXM-kFB2hBCVAmjOfqkcUKUmQWASIpkNKDPNZZl7jwlYSuIrpo4B43fOFmQDejowMhowDqCL0uzPmqrBUTGCTXdpHRVKpsM7QFLdkVG9nsB~UJ6rVce75CF~~mu6qkfKQRv0Yr4gsyN-Bl7jQi8izEaNmUWWnJq1O8Od5auKJfaouMHnRg8xOOoQxsJQvPZly5kH9M1wMdq6dteUIOSLzIKX0qQ85Gw~N9eFo~R4tlKagO99sFmY8UOu0LEgCJcadpQ1MCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/8d88/d83a/4d67b64c423437bee592269953cd17ad?Expires=1679270400&Signature=ENLFSzsYoIuolB-qKh0goCJ4ez4-ao6rd-LPQvka2nbPRUJx1uP-q9x329tj~j1QF0Dlxhuo5Bt4K93WSGBUzdpIwCv3Ghcn4JZsyP8D2N0-XFPtGWMyalPeHzSIzdUcGutWmGMc4zchAOkgkw4ycFMufpXvaaClwlG5Ulp-wMeq-nN5Vo3MdXkMZnnMU4aV0R51EnOW4VWITPDr~H8bfOFbiwDQ3sB84dJ7WEa45cn~HsYboctPjnEHsSmkQqRbEgOYSpvAvDZC4BBlfCZVP8XrAMwJF1vqeDZm6qYKi1T8FNTz49A5o8jnOVk46WSwbFFAOZLT76K8DSLnvCRGvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/8c02/4e5a/fc50fb8cfa641011745b7e9b85fbe77c?Expires=1679270400&Signature=imbV1mRd6GdjKAUDxICVk9h6gH9Gi4v5oRBybWsQSUC-RhhvLozbRFRdrpLdr7o4FY9X7kN1rcaeWfv8Vbh9cFm7yAejUNRhRxwsLCxxGThh4csFvAFuPMxeeTXG3bBHRLoW~T-z1RdXQvyvAEVKwkmEaD2Q23KENl5FnInA8~SII5hvSllK-7L9tKscNGzmlRaNzbnuu14c6ykxf8M7X1Xs~EmhoAv64HTM2ES8P1Z6VCji-~yWM568A3b3nZsFLAvnlC0RxeU-eINAzEEcK5v6BrF6zjklYCTrxOVh3AseRBS30Xao1551WGXbUgV1HwIicLvL8beVjImCHp2~hA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
