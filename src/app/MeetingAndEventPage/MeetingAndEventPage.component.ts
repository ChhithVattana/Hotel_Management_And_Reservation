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
      id: 1,
      name: 'CONFERENCE ROOMS',
      room_info: "BEST MEETING ROOM PHNOM PENH",
      des: 'Looking for the best meeting venue for event in Phnom Penh? Sofitel offers a range of meeting spaces from a 1,400sqm Grand Ballroom that can hosts up to 1,500 guests ideal for large celebrations and events to other 5 smaller-sized Sofitel meeting rooms ideal for medium-size and small meetings in Phnom Penh.',
      main_des: "Plan your next memorable event with our choice of packages. Sofitel Phnom Penh Phokeethra stands out as the best meeting room in Phnom Penh. With the 1430 square meters, our Grand Ballroom can accommodate up to 1600 persons. Also, the Grand Ballroom features the latest electronic, sound and light technology. Whether you are arranging wedding, anniversary, Gala Dinner, reception, conference, staff party, exhibition or product launching, our Grand Ballroom can serve every purposes. Elevate your meeting experience with our upgraded meeting room including the most recent innovation with giant LED screen.",
      guest: '100 people',
      location: 'Floor 5',
      size: '1000sqm',
      img: 'https://s3-alpha-sig.figma.com/img/8c1b/3232/bddb341dbe3bb49b8dc2ab8c8f973db1?Expires=1688947200&Signature=gOji4gHEeX6x~lINP2DkncYkES8unguOJ7qRgkJRAvPOrYeNoQAf6D~F7ubdmhC36Kp0m7cOwMdRAd2EJxhldz46xhJC1KaZ8fl4rgoTAHC1VIgxe0revFcIejv3EzuxViWRHWW0bTKBKFGRnkk8EOY~IdSlrC0rISbSgh6esQNg78A6OnNdXfNUJTUfc4nPMVzC-FzNNGAcSyJM~eGSfTf6FGgg711rVp0~Y23HSny9~p-zv1l1Y0qdrDN5UBKcPszg~vhZCSv~S46~IOqhT2JQv2Ea~kpD3UK3l8S~ZeDQ9o8pDq2aNS6MVSjO-eIiisl42V1w0RQX3Vd7uo-hsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      img_1: "https://s3-alpha-sig.figma.com/img/d4d7/4fd9/1882fe2d1b11c2fe4b355f1ee4dc9bdb?Expires=1688947200&Signature=LxXfc6-cpJ~545OwJb-7SR5PexvlTV7lW83IjgP4SQ3gOZODpYC0~MqXCuLIWwPWv9jGcj1tdmx-k4DyBmDgsVU1Y-iwz6uBD3xK2UkGQICSfpj6JJlXlaCV0UrUbcN1Q6Jl3ePF1ifsp4jlHNzPyXaxux7kIDvaS82mivXSNz65e413zVCiPOQGjhWWc5ThXnnA9pYFsTWh6bho1dTKM6MaXgf7ZS6tdWOOrVbiyG-GIcPs1F6~0zNUBGvVQLvli~L90WJYPX9lSc9USrU48VP9cqW2kFk8ljKx~IuEC~GLgCHZ8DEKlEtsruQ9dqSD7MOd~977gyMgkaU87~tZRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      img_2: "https://www.bing.com/images/blob?bcid=S9LBYh95lcYFqxcxoNWLuD9SqbotqVTdP08",
      img_3: "https://s3-alpha-sig.figma.com/img/369b/4479/cb654c5cff0ff46a1b273ad56a0acbd4?Expires=1688947200&Signature=XtiY-uPgZhx9Pq18UTVGO6ujuzhbyuX6RzxW~e9A1ntopIIgHIGBzJ3XvmIaDh4gLDmKZC2~UvOzRxmsTnstXtcE8QPNs0t6vF2HrwX8mlkAIrMlG3xyW1Gpk~Ced3oGV3rSKRZ4h8es01jeulSZrzbWtDpC1WnsnsBRSvV1-CczVH3h4TbNZR8TXyzbEZqwGi8zZUAaxoFoxWCx8UkjujT-chPBHWWmM5hnbODecmF9Nls5JL-CDuiuPovqL2MtY86GoexRxdjqpkIQ4WFgTMdI5aUBJ~yYUPzk1nGfsOzoSTzcntVEcKT~y~Id-VOShfyFNifsIUoJtCYBIaPLQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 2,
      name: 'LUNCHEON',
      room_info: "BEST MEETING ROOM PHNOM PENH",
      des: 'Everyone always find the best place to celebrate event though small party or big party or with family our services can help you to make this event happened to our customer.',
      main_des: "The essence of conversations over lunch is its core and each issue is constructed as if a menu. Over the lunch table, the magazine brings together different generations whos share opinions, stories and memories, offering us an insight into their unique cultural contributions. It have a magazine mixing art, fashion and food. Free spirited in its content this biannual magazine offers readers a generous feast for the eyes and the mind.",
      guest: '100 people',
      location: 'Ground Floor',
      size: '500sqm',
      img: 'https://s3-alpha-sig.figma.com/img/4fab/c38d/46ba2155fb3528382183cd5d5b2ca57c?Expires=1688947200&Signature=kJBWIny0e1nQs5Pc96SmdTqrP2i~hIsRXVKiGfkyJyYg3OTYk6NU-IhTDCDhkpo~UjTrPmNQB6yDTex0lWmBFscnEB6U4CQivLbIkKrib6o2C9d9wkjumCcPkW1GDN7yDkg8saNK4P5gGXePyBhW60aIXVC4YN7QxLLDf6pmuszTxf~youQvdhW0q0fw4ytERi3duaer1Z6dG65yLePg6oiXqxiAeL2VLdGLWZsq2-f-NO-ZIgbY~uyqsKbnwkgrunZWEBDoiK1k~jl4izEL-DDEyiX4QCxEl4ijzyjyjPTZQy0C4R~CMzO~HREktSOVD7e-XELfO5VzU9icR8c20w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      img_1: "https://s3-alpha-sig.figma.com/img/692a/2a8c/60313fca6394c97b9922dc3f3a4fe024?Expires=1688947200&Signature=XXkwB6OfHTgPaG99kbwsFnB-S0q97e2DVmeXGcNoV2aRfvNK33WkPOjvqR188gbWEwbQwaVU91BjGkiaB7DCwlZrCVFy~xI8P3BteFuielbdrkat~Qf9Ecj~JH-Okrqib3CaB00XAb7cXMnUAvjNvtH42jMhHMeD3BhplwMttOxYNB0J2Xxf7S-8-EY73fsbnHKv5283svkfOpwWiFF15hn5SUeR8rHibfZQgxwtzkAKiL1FECKZPhY0N0gskgZOXai657Fw9Ghp6X76VH1VIRnLoGQAx-26mBRPBjaebNrK8COhClVxmWKzQw926aj5Wnx~wiVQF7kzp~B95o0NhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      img_2: "https://s3-alpha-sig.figma.com/img/0509/7cba/3b9d23d13582dfb49d267f4964609149?Expires=1688947200&Signature=fK0C5vMwX4nep~ajPaj3hNFOWKcbUmlZOZMWIN37g4G2z2aYA~GhUqgtnAMIny3E-9Y5TCoZHONzkHvPS0sS4Hp00mMTc3sowkjW1UtpNEFw4OaUPHo2MeiUQPbTTyghNrg8GrWX40FTyZDLM43VSb5i8bDGXhlJOFr3~cGdlbEfRUY1jUiCXdCTkQ8S5MQv0Kot2YAcmWZFPQxkpkQJgNuWne2GoyV5cz04itMDlssh9y1EY646WjWqwg1pnb6qe0P95-SUarAc1qhuZVsOXdfiv4tf1BeHzqgUTP~yROXZqaiO0fIUNSQvyqDo3xMvhFllJUCi-tqMinlhNdESZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      img_3: "https://s3-alpha-sig.figma.com/img/db85/1d89/234b8431f04990a2fc94be399db091c0?Expires=1688947200&Signature=few~r2AbywmKwMS~Y3Zp18sSMqa-1eKagijhgxc53rh8x2a5lpi7FINJZGCcn3rLltl17scc7muUtOnO31iFOZbVVfdDOP8FjCWeNUZB5ZGNIqjkTQ4arUoPD6u824iE9Xaw2UTEoiALwxc9UJ6EEwU4C4HIZ9NRmAxu2fmei0ZRgLQzVcuQwBEp~CiocFqpBP-rroI1DURgdOfystKNIi3PryKYi2b4ld~hn5FnoPYqGRF9RpYAlDJ3KGRTlM2f-93UTxi8we466eZJUzgPyuBb6XGne9Xb-HQ9dcpg0gRGonxa3Xofrs5l92t4EjQEYUTRLX9RkGKnierK8RqewA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 3,
      name: 'WEDDING ROOM',
      room_info: "BEST WEDDING PLACE PHNOM PENH",
      des: 'One of our favorites venues in the center of Budapest in the Mallika Hotel. Elegant, classic and royal wedding hotel perfect for engagement parties, pre wedding days, wedding ceremony and gala dinners and also big enough to host the weddings.',
      main_des: "It really hard to find the place to celebrate the wedding to the new couple that hard to think what we have to host this event. MAILLIKA Hotel can help you that host this event to be a success and provide all the step to who chose this packages. Brides will love these new features and want them to be part of their weddings experience. We provide Free Meals for the couple at on site restaurants if they book a certain number of guests in their hotel block. Post Wedding Pictures, include Photoshoot and also Partner with videographers.",
      guest: '200 people',
      location: 'Out door',
      size: '1500sqm',
      img: 'https://s3-alpha-sig.figma.com/img/2371/0589/c2a237777cfcbace68d81c3b17ada6f7?Expires=1688947200&Signature=Zj~tfjSQIzwaf27pleMpNMT5GC6gpiQ39TPMr9OfYuaH1leC6sI2xQXxn1RqKzPfOBLz-xOeyM6YaBLKJFJeHIwH0He5N6i0Kd44hme1iUMgpMPXUUwIkcOHVOIOdN8bfKjNPyznAFNcH8ZTOk~AY~ZU52MZyzwZ14orDNDI4fChmt~ZGf56SB7Y50IMX8AQ9ITfmGJSpDTGoA91zcYcLwLrBWLQjWTA10mQ4FL2UGyxYI3~txmb7ck7whPStUJUa8pwPk6fzebc9IZOGieGFCRd1iHtVqSLpI2o0k6t9s3XGipMepT-tn7tgQw2ZaDxDjn5fuYa0Vhj3KGl1LjsBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      img_1: "https://s3-alpha-sig.figma.com/img/53f1/00f5/59a6636edd89ad5da089d7cd58e0de06?Expires=1688947200&Signature=DC1Qz2N5b8ugjhdIVvlw82lHzrHlBan-ajny9THpj5KEp9q183WhDYZJSeTGCCpSRPsDXi7RevL4kB1LOJEUIoQUhq9LL3-NXZuaovcxMkdBRib4Y760Ks9y2fznsfLZW0lJcyvdmNiJJ6CUoxguId6jSXaSmZUwW0B2cpprz7vBOaoTHM4Oqwzjj~aR0mi7tH41ZUkDAMqDml5l9fbfMiiD06BPX~-UZTMAx4qjA~MzMvnU-utvSRXlhVmp3ntiBu31UuRowz2Z1LhXJ3n8wWddpwBZmzbUfIoGC3FuGsKG-EZvi1qcmk541IepPDkvtyl22yooXYtm44KY9MMfaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      img_2: "https://s3-alpha-sig.figma.com/img/5e7c/908f/a937b7f7e83c401e8f9c7e3043ffc044?Expires=1688947200&Signature=V5zXWRfPPWAuWX9qDbGAtoqXPbdQ6a6hKQf8zbw-CR5XQl60yqYvm47bGMeGM-r2s0m~nLqhGOWqU7ls-v0cPaXy7Y-Wdd7aO-78lFnDoghYNXLFFOa8Z3JdsU630jxC0wkRxS1Omus3u2qx2CduD831Owh-EHwt8KgIWuQCMdIgyEopIw1JVG05J~uaD86WmzJ0mvCKUjGPF5DpJZf92QWpeWDbhGr~K4eaU2IiedSsP8i7Fzk4hgMwA3UaLyvGhfcc2iT1hzUYZixArNDnX~aNhEy2e0NAae5FIyzLEMIX-bB-RZUOCdY-RY9~imGGbuVoB56lrq8I03vMSh-1NA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      img_3: "https://s3-alpha-sig.figma.com/img/7ffe/f4be/20382973592fafdcec8c2c897ec03083?Expires=1688947200&Signature=ayoVWhDVyspiKlkfxq~fBJzwO56cfdAm~msffRsKMxVPthOSb0aOHLUgyvtjD1mqoLwhejn73H8NW3chxv9nQ5RiHRUInrm4yxdwH183hyVntO2ZQ8xSTSvpQXY623CCtie3TbiQqjVr3t-EwU313K29DmCJhoS3U-iGbHSCA1TCA9B7Cf7X4Ll9yujJXGCuQ65EwsqKQ9KaDcIg87FjExKhou6LaiG35~mwS18guBMYMzIIgh248TsJs-2EkRfbJfHAic5DlJNOL5JjP-P3Qz8HFnIyuzwg53bcxBRjnYcE8IhjDw0~KwIWuGuVxMO9D-KLdBGM~tnNbtDV~R0ySg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",

    },
    {
      id: 4,
      name: 'POOL PARTY ',
      room_info: "BEST MEETING ROOM PHNOM PENH",
      des: 'You may think that pool party small place to celebrate the event, but in our Hotel we provide the pool party is big that we can make an event like anniversary or make a birthday party at their too.',
      main_des: "It is the best part that travelers find the place where they can start or end their day and it the place that they will choose to spend the a whole day of relaxation. Not only relax you can celebrate your anniversary or birthday party it can help make you have more fun for this event. Leaving the design aspect aside, sunbeds must also ensure that they provide travelers with all the necessary amenities and equipment, such as small tables, cases, etc. This type of equipment, apart from the needs of the service, will also solve the travelers' storage needs for their personal items during their stay at the pool area, such as sunscreen, sunglasses, mobiles, laptops, iPads etc",
      guest: '50 people',
      location: 'Floor 10',
      size: '400sqm',
      img: 'https://s3-alpha-sig.figma.com/img/fc3f/701e/550ee3f6b45778887b1f853b54d300db?Expires=1688947200&Signature=C~-YBytOyejeaii0qv8S9xAX4GvDvi7HnHVElmwrSh3yI0dRZfRn5zbT90Mubjs54LvuD82mCRGjhZUcG0nH8hSUabcuQRCV2VDOBeS8i9-nh7Hx~K1PjSRGJHA0lG~INZLuSRlJ5GjAMZdB5SKRCjsqw32rTmue~eyd8ZqT083dMq8OE2PPSfP7kraZs5MdHdY9jFGHA-ZWYI~MLCwqe1H01wM-liAOzUm~W3jXLd-zE4670VV1UADmFaiZpdfc69mJEHXsOqch84p-jAGgb4ohmuC~pe~IvNuztVlIQ0qh1rpqLMw4uNUl4ER5sHm3XUpxtFNWHhPr3JNL2oHkBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      img_1: "https://s3-alpha-sig.figma.com/img/c61b/3f5e/efc49e6e480812e2be8b16e2db670b35?Expires=1688947200&Signature=dIYxG5GFxwaJmQ3pm0xdpL74Buaw78nGQZJgqJqSqAbhIZpwSp0IFVNSuRquGzOUrbYsGq3alPoFIY~s6aLkszJpHjbyUIt4eN0cFaVZ~rnwYOHov0alQrXDXzkpH7WY6rkRiBn2qOCSPBelwDD6w9zC5Z9abgn1FO8yWgwUE8t3Vbx6d~wRU9PFGS4iIrj9AJDfiW4MS3s9~wOQ8y81~~E-mvUx2lzm6F-s4Jd-U65eApYL~c54izjatiSy81-5RWvyaS7990Sl-cXS10BXrqZfgEUzIQ~-RJ9Y2CaDWmuxgZnRZ~Bu3MyfNSh5rvQ8bNelSbxT~SZsmXa7kBpHHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      img_2: "https://s3-alpha-sig.figma.com/img/b298/9f9d/02d583d028432718bfab13317037d370?Expires=1688947200&Signature=HBdp0HbJihgEcoAn10UaPOEAPd92qZ93C4Wzi3QQkvgRhaIfSN7Fd0InvXoJRXQ9WcYSrScTFfKMR~x-3NUR3V8ZmuY9oOL-9e2k6ruCp56YgpRcZHWrTQr3jiH0B9Qrd8fFKP-NzHsGuMjH86mUIrWBwSSA5eOuPk42AdfcQf~xTjR5btvZ0UBIquBMOhSqp5kw-8GIh7JUlks8MVjt0MuiEiSS8q0iJx-cf2V~ZXSTqFjCmhoSl1fcKrEdwxjzFZNJnrQmdhyCa6ZE8q42NHu0TBo5I8SUQY9aWPDi4T5zuVVLR7j9hPr75ELhu1oMsRLgOVutxeYIxbEfi0Ytnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      img_3: "https://s3-alpha-sig.figma.com/img/fc3f/701e/550ee3f6b45778887b1f853b54d300db?Expires=1688947200&Signature=C~-YBytOyejeaii0qv8S9xAX4GvDvi7HnHVElmwrSh3yI0dRZfRn5zbT90Mubjs54LvuD82mCRGjhZUcG0nH8hSUabcuQRCV2VDOBeS8i9-nh7Hx~K1PjSRGJHA0lG~INZLuSRlJ5GjAMZdB5SKRCjsqw32rTmue~eyd8ZqT083dMq8OE2PPSfP7kraZs5MdHdY9jFGHA-ZWYI~MLCwqe1H01wM-liAOzUm~W3jXLd-zE4670VV1UADmFaiZpdfc69mJEHXsOqch84p-jAGgb4ohmuC~pe~IvNuztVlIQ0qh1rpqLMw4uNUl4ER5sHm3XUpxtFNWHhPr3JNL2oHkBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
