import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../Service/AuthGaurd.service';

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
      img: 'https://s3-alpha-sig.figma.com/img/5d2f/ec45/eccda3f82c0a9a60eb6ebea1fd3ca355?Expires=1688947200&Signature=i~ba3~KP4OegrY3aTWEkouK6TF1wGrL1ZQacFbdEC7x4CgkC8wWcbdN39hTxRK9DWBXDQc5EVsGiC9~0kGoLIGOIlhMwB1dfd~DB8ElLxrwm6b8yOFbpVc1FbysBxstMLwCSiDDgPQUpubJFXjI1wMYUxYX3D6k3D1hznylNkotuNug91Nzj1mmBQvXANwqLohF83VWAX6L6NDQpbOb~lu2YXTXfLdAFr3f90QJS6RM2n4IYf3~CUiWMmbLvQNH2EdiBJhRNCKGHBNZGV8Qn4l9oKUAwla1VCKWk~bwaXmkxFVFFYGJ8zO6xgTv7H1sk9kjz8UhhPBFGhxcl2SztXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'LUNCHEON',
      des: 'Everyone always find the best place to celebrate event though small party or big party or with family our services can help you to make this event happened to our customer.',
      guest: '100 people',
      location: 'Ground Floor',
      size: '500sqm',
      img: 'https://s3-alpha-sig.figma.com/img/7dd1/0d31/484be8f8964861fe490801af36350bf5?Expires=1688947200&Signature=LvSVaap2UFdV4YKtizTtDbckOknd4pK1nHiuehpMq-~EDiwScM2ed8AVnxdUpKcRYCwaIEKlDF7Ob-QQCXNmwv-rcd4qqj9ez7OV82LUGVpDqOvNt5I1LdPcN6cHDfTXbUzc7jOj~lt86ZlAfisDF8fS8O0JfbymvlcoTbAbyFSEOuezQWdTjFA9oXVqTEFTFdiy8fwNmWlUwruUpDpKGdM1aUQlpSpIPMsNKiZPz8OOmuS66DmeNZs-7OqmGuNHiTzwhS4Zn0vvH6jeP5MnqGRgzGEb7BMQ69cjdR3zjDmxgVJoudXiMTgH40akjXAtdozH6xcVrb1~96woCqT2-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'WEDDING ROOM',
      des: 'One of our favorites venues in the center of Budapest in the Mallika Hotel. Elegant, classic and royal wedding hotel perfect for engagement parties, pre wedding days, wedding ceremony and gala dinners and also big enough to host the weddings.',
      guest: '200 people',
      location: 'Out Door',
      size: '1500sqm',
      img: 'https://s3-alpha-sig.figma.com/img/c1cd/3782/f2ea02cc7e186dfcb1ebf7ca7822e82c?Expires=1688947200&Signature=epZJKrVE7Exi7aXx1mR08DRS7uvvzhO-ytysXfKhaQPnMm7PB-Op5~qtoTzCwbHSbyCyHuZOzZM4B-d9eDJlrnSI8r-B993LzInFp3FcU5o5JMkVlZbJ5UxbILDhp-2gQJkLFexNMNNWZiuuQxtWcQOuJ9W98aohd0iJ3f6hXQWk6KVh-ehX2eYlnxuUKuT0nrkGk6K7J~BeTZmRg4hY1TDUADJGeHuP4LaXPa5DUY2tNeclyyRqD2UDsTVchsZrZXoNmM1MN3NU31xcUhBI7W~hiOARB8fLuwAdw8MRM8jZE5xc3-LzahGi3FQhEPSoyyuzsZVkUTYpBnspKrAArw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'POOL PARTY ',
      des: 'You may think that pool party small place to celebrate the event, but in our Hotel we provide the pool party is big that we can make an event like anniversary or make a birthday party at their too.',
      guest: '50 people',
      location: 'Top Floor',
      size: '400sqm',
      img: 'https://s3-alpha-sig.figma.com/img/7dd1/0d31/484be8f8964861fe490801af36350bf5?Expires=1688947200&Signature=LvSVaap2UFdV4YKtizTtDbckOknd4pK1nHiuehpMq-~EDiwScM2ed8AVnxdUpKcRYCwaIEKlDF7Ob-QQCXNmwv-rcd4qqj9ez7OV82LUGVpDqOvNt5I1LdPcN6cHDfTXbUzc7jOj~lt86ZlAfisDF8fS8O0JfbymvlcoTbAbyFSEOuezQWdTjFA9oXVqTEFTFdiy8fwNmWlUwruUpDpKGdM1aUQlpSpIPMsNKiZPz8OOmuS66DmeNZs-7OqmGuNHiTzwhS4Zn0vvH6jeP5MnqGRgzGEb7BMQ69cjdR3zjDmxgVJoudXiMTgH40akjXAtdozH6xcVrb1~96woCqT2-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];

  constructor(private _router: Router, private authGuard: AuthGaurdService) {}

  ngOnInit() {
    this.getScreenSize();
    this.authGuard.canActivate();
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
