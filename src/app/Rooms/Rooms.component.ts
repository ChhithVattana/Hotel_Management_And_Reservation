import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-Rooms',
  templateUrl: './Rooms.component.html',
  styleUrls: ['./Rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  scrWidth: any;
  data = [
    {
      image: "https://s3-alpha-sig.figma.com/img/58f4/8837/754d75a807f0a0275574ed377d532883?Expires=1679875200&Signature=ct8E68gPPS-pM4al3SbQB7YNzSEtiSYVM67sM6qdUOr7~jm9DdvcUsUY4IeDMndRH92jn3V4hkRVvI9XLoGWoAny~h4DPoevEISA-oA274p9HDQZxK7UORR9pG~izGMnKNF6AOfHDI5m9-~zffhItHAMpvufu~3yMCWyzK1JjewPinCSyP8mypVN3qu0w5XOdvT9JKB-ofxry47KV2ueBmuWjeWtG95ZLSkF~WdTy2VrNB5MI~FemgRcpOAZXrtTurr9ZH3jZ~A7pUn-WQXFN7S-XdKghETH8QYlF3iiyD9e~EZ0sYBxGi6sEkgvRWiqpT6Nl9QhqYMPPSSE-KG6iA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      roomType: "FULL WIDTH ROOM",
      roomInfo: "Features a private patio with outdoor seating. It keep up with the rest.",
      roomPrice: "$369",
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/7305/b894/d0b7c3d1ec430cc9d329601f1399e722?Expires=1679875200&Signature=bvP5XIbvDzmW8Yxt9un-kXRlina0Zu1DQxb5bHdXePxllKpWDxA43PaP5TM0iA2~ZXl0L2NAD8AjztTQkwws-oJdCFhbkxGo2osQ3QqwlsSlfy5nJmQuV82L9IA-2z6Gs-q70D0Kkf4IYDu6DQSkwWRiZkY54yD56LTv1~REEnRZYoqtDttjYtCcXMHkyi0cw0eWGRbe6wfbGO7pBy35vdNuO0BYtq218pTzvWu~YlzuwL0MBq6XZMHbfn56rXI3JeI~V20DUOzHeYulpoFldRc1l4C35nRzU-M3~NIhi9s9FQp3BbC4RGe6kjXUPH76KZbGri--4YVp5wRgM1KqnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      roomType: "JUIOR SUITE",
      roomInfo: "A great place to relax and have fun. Our rooms and suites are a haven of well-being for you!",
      roomPrice: "$229",
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/e12d/f06b/f9e0e0fc9fb40d1a0749ef7a45e7709f?Expires=1679875200&Signature=Hgqi6VvHcjg4RxinZhNG8LlRJ~oxdsMhqqVwMDQ7wfjbttrBQO-yT4H-~L2mZLvoFPXXElobEfgHEwTnGmx3Wrq-Z4hmfAeiAlZ6KXre4XMz8soRBWr8wSNJ-Ulf0dWUFc3-EbcM4z57tN1yqnQQ-W0-svzjrks4fSyMWxJSK3EUJXu1ZgLBoEsfM6M-mn7Zacd~lPjHJPnEl97KbL-c~3SY0xdhAoA4FhrlNmnbmCPFugoHqiQuUqY2deB7tf4~5lTzkka3YL69FxNeLOfrnivKqJ7C5l-t~Hks28hpc8QP500pBo9D7NWOaeL4E30hjGcY2-VYIDX6SjkvAsAbQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      roomType: "MASTER SUITE",
      roomInfo: "“Master suite” Use a balcony or terrace for an outstanding landscape to relax.",
      roomPrice: "$399",
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/e12d/f06b/f9e0e0fc9fb40d1a0749ef7a45e7709f?Expires=1679875200&Signature=Hgqi6VvHcjg4RxinZhNG8LlRJ~oxdsMhqqVwMDQ7wfjbttrBQO-yT4H-~L2mZLvoFPXXElobEfgHEwTnGmx3Wrq-Z4hmfAeiAlZ6KXre4XMz8soRBWr8wSNJ-Ulf0dWUFc3-EbcM4z57tN1yqnQQ-W0-svzjrks4fSyMWxJSK3EUJXu1ZgLBoEsfM6M-mn7Zacd~lPjHJPnEl97KbL-c~3SY0xdhAoA4FhrlNmnbmCPFugoHqiQuUqY2deB7tf4~5lTzkka3YL69FxNeLOfrnivKqJ7C5l-t~Hks28hpc8QP500pBo9D7NWOaeL4E30hjGcY2-VYIDX6SjkvAsAbQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      roomType: "MASTER SUITE",
      roomInfo: "“Master suite” Use a balcony or terrace for an outstanding landscape to relax.",
      roomPrice: "$399",
    }
  ]

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    return (this.scrWidth = window.innerWidth);
  }

  constructor(private router: Router) {}

  ngOnInit() {}

  onClickNavigate() {
    this.router.navigate(['/ourroom/content']);
  }
}
