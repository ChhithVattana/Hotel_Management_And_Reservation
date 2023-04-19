import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-MeetingAndEventPage',
  templateUrl: './MeetingAndEventPage.component.html',
  styleUrls: ['./MeetingAndEventPage.component.css'],
})
export class MeetingAndEventPageComponent implements OnInit {
  num: any;
  scrWidth: any;
  data = [
    {
      name: 'CONFERENCE ROOMS',
      des: 'Looking for the best meeting venue for event in Phnom Penh? Sofitel offers a range of meeting spaces from a 1,400sqm Grand Ballroom that can hosts up to 1,500 guests ideal for large celebrations and events to other 5 smaller-sized Sofitel meeting rooms ideal for medium-size and small meetings in Phnom Penh.',
      guest: '100 people',
      location: 'Floor 5',
      size: '1000sqm',
      img: 'https://s3-alpha-sig.figma.com/img/c1cd/3782/f2ea02cc7e186dfcb1ebf7ca7822e82c?Expires=1682899200&Signature=JUjeBmQTULx9o1XHjSeiMKCfldHyc23i4JfGcd2quCRiaQr7QD1XHVbiSC9IYbU9AhTIALModA1UFY5JMV2Nmi8bCsIQ85zhn2jngwy-sfu9zEYCEOOX85K9pe7ocv6ICc2MsYF9n6aNjHjc-llIAoMkL1wtqO3ZuUqvuvwsWK1FEE1oOWcjEcVk54KTaQtgLqqJGxrmcrjPrIZj2NNkyn6y3HTI7CT3Wu0STBWNZE3IsAfE3NCuuWsx4xCTnv2zSHBlT3ynZ3BKsBVaLIfmgtBbTAREtmUqIszPE0e043NkpT5jWL57030-yGqNh~hjJILurA54IQ5bBP3Gf99Bcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'LUNCHEON',
      des: 'Everyone always find the best place to celebrate event though small party or big party or with family our services can help you to make this event happened to our customer.',
      guest: '100 people',
      location: 'Ground Floor',
      size: '500sqm',
      img: 'https://s3-alpha-sig.figma.com/img/7dd1/0d31/484be8f8964861fe490801af36350bf5?Expires=1682899200&Signature=OwQ7JMzDjBzZhqr96puh7ONpJH6c-fNJRDAp0jAj5Kj94g3rWvKtlKbSXq02nikCwtOONn3MAzxMAHj64MrMSH2NJnyz0CsnwBpAiO-jmLS8WkN3isB-bUXP02d3oPem0bYftDA-Wt5PGIEiBxl36fr2NMiWNPaKCgVXZnDg3BDUS3fNBjq~jZhoklXcXhHCrN1uUu~NlSLhYM46xgPQ4m1BDVmgXhC3sw6ZKmGF6Sou6nzncT1l8TO942aLy6iZh46x4y5OlhITdZF38Fq7HJLwx32BnDJr2YCQMJsTLWFBCiJTsjPsv5wCpT3fU82XmOQj9JCt34bB7U72NqOIKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'WEDDING ROOM',
      des: 'One of our favorites venues in the center of Budapest in the Mallika Hotel. Elegant, classic and royal wedding hotel perfect for engagement parties, pre wedding days, wedding ceremony and gala dinners and also big enough to host the weddings.',
      guest: '200 people',
      location: 'Out Door',
      size: '1500sqm',
      img: 'https://s3-alpha-sig.figma.com/img/c1cd/3782/f2ea02cc7e186dfcb1ebf7ca7822e82c?Expires=1682899200&Signature=JUjeBmQTULx9o1XHjSeiMKCfldHyc23i4JfGcd2quCRiaQr7QD1XHVbiSC9IYbU9AhTIALModA1UFY5JMV2Nmi8bCsIQ85zhn2jngwy-sfu9zEYCEOOX85K9pe7ocv6ICc2MsYF9n6aNjHjc-llIAoMkL1wtqO3ZuUqvuvwsWK1FEE1oOWcjEcVk54KTaQtgLqqJGxrmcrjPrIZj2NNkyn6y3HTI7CT3Wu0STBWNZE3IsAfE3NCuuWsx4xCTnv2zSHBlT3ynZ3BKsBVaLIfmgtBbTAREtmUqIszPE0e043NkpT5jWL57030-yGqNh~hjJILurA54IQ5bBP3Gf99Bcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'POOL PARTY ',
      des: 'You may think that pool party small place to celebrate the event, but in our Hotel we provide the pool party is big that we can make an event like anniversary or make a birthday party at their too.',
      guest: '50 people',
      location: 'Top Floor',
      size: '400sqm',
      img: 'https://s3-alpha-sig.figma.com/img/7dd1/0d31/484be8f8964861fe490801af36350bf5?Expires=1682899200&Signature=OwQ7JMzDjBzZhqr96puh7ONpJH6c-fNJRDAp0jAj5Kj94g3rWvKtlKbSXq02nikCwtOONn3MAzxMAHj64MrMSH2NJnyz0CsnwBpAiO-jmLS8WkN3isB-bUXP02d3oPem0bYftDA-Wt5PGIEiBxl36fr2NMiWNPaKCgVXZnDg3BDUS3fNBjq~jZhoklXcXhHCrN1uUu~NlSLhYM46xgPQ4m1BDVmgXhC3sw6ZKmGF6Sou6nzncT1l8TO942aLy6iZh46x4y5OlhITdZF38Fq7HJLwx32BnDJr2YCQMJsTLWFBCiJTsjPsv5wCpT3fU82XmOQj9JCt34bB7U72NqOIKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];

  constructor(private _router: Router) {}

  ngOnInit() {
    this.getScreenSize();
  }

  onClickNagivate() {
    this._router.navigate(['meeting&event/content']);
  }

  getScreenSize() {
    this.scrWidth = window.innerWidth;
    if (this.scrWidth < 600) {
      return (this.num = 1);
    } else {
      return (this.num = 2);
    }
  }
}
