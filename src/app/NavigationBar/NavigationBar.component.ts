import { Component, OnInit } from '@angular/core';
import { HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-NavigationBar',
  templateUrl: './NavigationBar.component.html',
  styleUrls: ['./NavigationBar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  isSticky: boolean = false;
  tmp: number = 0;
  index = 1;
  scrWidth: any;
  private navbar!: HTMLElement;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.navbar = this.elementRef.nativeElement.querySelector('#navbar');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.myFunction();
  }

  myFunction() {
    const sticky = this.navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
      if (window.pageYOffset >= this.tmp) {
        this.isSticky = true;
        this.tmp = window.pageYOffset;
      } else {
        this.isSticky = false;
        this.tmp = window.pageYOffset;
      }
    } else {
      this.isSticky = false;
    }
    const windowHeight = window.innerHeight; // Height of the window
    const documentHeight = document.documentElement.scrollHeight; // Height of the entire document
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop; // Current scroll position

    if (scrollPosition + windowHeight >= documentHeight) {
      let nav = document.getElementsByClassName(
        'nav-bar-main'
      ) as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < nav.length; i++) {
        nav[i].className = nav[i].className.replace(' isEnabled', '');
      }
      nav[this.index - 1].className += ' disabled';
    }
  }

  currentLink(n: any) {
    this.showActive((this.index = n));
  }

  showActive(n: any) {
    let i;
    let link = document.getElementsByClassName(
      'nav-link'
    ) as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < link.length; i++) {
      link[i].className = link[i].className.replace(' active', '');
    }
    link[this.index - 1].className += ' active';
  }
}
