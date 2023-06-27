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
      img: 'https://i.pinimg.com/736x/03/52/d0/0352d0c81ed7ee30fe25a4f254b039f1--parlament-classroom-setup.jpg',
    },
    {
      name: 'LUNCHEON',
      des: 'Everyone always find the best place to celebrate event though small party or big party or with family our services can help you to make this event happened to our customer.',
      guest: '100 people',
      location: 'Ground Floor',
      size: '500sqm',
      img: 'https://s3-alpha-sig.figma.com/img/4fab/c38d/46ba2155fb3528382183cd5d5b2ca57c?Expires=1688947200&Signature=kJBWIny0e1nQs5Pc96SmdTqrP2i~hIsRXVKiGfkyJyYg3OTYk6NU-IhTDCDhkpo~UjTrPmNQB6yDTex0lWmBFscnEB6U4CQivLbIkKrib6o2C9d9wkjumCcPkW1GDN7yDkg8saNK4P5gGXePyBhW60aIXVC4YN7QxLLDf6pmuszTxf~youQvdhW0q0fw4ytERi3duaer1Z6dG65yLePg6oiXqxiAeL2VLdGLWZsq2-f-NO-ZIgbY~uyqsKbnwkgrunZWEBDoiK1k~jl4izEL-DDEyiX4QCxEl4ijzyjyjPTZQy0C4R~CMzO~HREktSOVD7e-XELfO5VzU9icR8c20w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'WEDDING ROOM',
      des: 'One of our favorites venues in the center of Budapest in the Mallika Hotel. Elegant, classic and royal wedding hotel perfect for engagement parties, pre wedding days, wedding ceremony and gala dinners and also big enough to host the weddings.',
      guest: '200 people',
      location: 'Out Door',
      size: '1500sqm',
      img: 'https://s3-alpha-sig.figma.com/img/2371/0589/c2a237777cfcbace68d81c3b17ada6f7?Expires=1688947200&Signature=Zj~tfjSQIzwaf27pleMpNMT5GC6gpiQ39TPMr9OfYuaH1leC6sI2xQXxn1RqKzPfOBLz-xOeyM6YaBLKJFJeHIwH0He5N6i0Kd44hme1iUMgpMPXUUwIkcOHVOIOdN8bfKjNPyznAFNcH8ZTOk~AY~ZU52MZyzwZ14orDNDI4fChmt~ZGf56SB7Y50IMX8AQ9ITfmGJSpDTGoA91zcYcLwLrBWLQjWTA10mQ4FL2UGyxYI3~txmb7ck7whPStUJUa8pwPk6fzebc9IZOGieGFCRd1iHtVqSLpI2o0k6t9s3XGipMepT-tn7tgQw2ZaDxDjn5fuYa0Vhj3KGl1LjsBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'POOL PARTY ',
      des: 'You may think that pool party small place to celebrate the event, but in our Hotel we provide the pool party is big that we can make an event like anniversary or make a birthday party at their too.',
      guest: '50 people',
      location: 'Top Floor',
      size: '400sqm',
      img: 'https://s3-alpha-sig.figma.com/img/fc3f/701e/550ee3f6b45778887b1f853b54d300db?Expires=1688947200&Signature=C~-YBytOyejeaii0qv8S9xAX4GvDvi7HnHVElmwrSh3yI0dRZfRn5zbT90Mubjs54LvuD82mCRGjhZUcG0nH8hSUabcuQRCV2VDOBeS8i9-nh7Hx~K1PjSRGJHA0lG~INZLuSRlJ5GjAMZdB5SKRCjsqw32rTmue~eyd8ZqT083dMq8OE2PPSfP7kraZs5MdHdY9jFGHA-ZWYI~MLCwqe1H01wM-liAOzUm~W3jXLd-zE4670VV1UADmFaiZpdfc69mJEHXsOqch84p-jAGgb4ohmuC~pe~IvNuztVlIQ0qh1rpqLMw4uNUl4ER5sHm3XUpxtFNWHhPr3JNL2oHkBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
