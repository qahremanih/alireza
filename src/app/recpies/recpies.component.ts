import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-recpies',
  templateUrl: './recpies.component.html',
  styleUrls: ['./recpies.component.css'],
})
export class RecpiesComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('لیست دستور غذاها')
    this.meta.updateTag({
          name: 'keywords', content: 'دستور غذا, دستور غذای پخت ماکارونی, دستور غذای پخت قرمه سبزی, دستور غذای پخت سوپ'
    })
    this.meta.updateTag({
      name: 'description', content: 'آموزش دستور پخت انواع غذاهای ایرانی و خارجی'
    })
  }

}
