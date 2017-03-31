import { Component, OnInit, Input } from '@angular/core';
import { FeedObject } from '../models/feedObject';
import { Item } from "../models/item";

@Component({
  selector: 'app-feedobject',
  templateUrl: './feedobject.component.html',
  styleUrls: ['./feedobject.component.scss']
})
export class FeedobjectComponent implements OnInit {
  @Input() feedObject: FeedObject;

  favorites: string[] = [
    'Geordie Shore',
    'Keno'
  ];

  constructor() { }

  ngOnInit() {
    for (const item of this.feedObject.items) {
      for (const favorite of this.favorites) {
        if (item.title.indexOf(favorite) !== -1) {
          item.favorite = true;
        }
      }
    }
  }

  openItem(item: Item) {
    window.open(item.link, "_blank");
  }



}
