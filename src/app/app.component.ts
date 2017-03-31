import { Component, OnInit } from '@angular/core';
import { TvfetchService } from "./tvfetch.service";
import { FeedsHolder } from "./models/feedsHolder";
import { FeedObject } from "./models/feedObject";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  container: FeedsHolder;
  sub: any;

  constructor(private tvfetchService: TvfetchService) {}

  ngOnInit() {
    this.container = this.tvfetchService.container;
    this.sub = this.tvfetchService.change.subscribe((container) => {
      this.container = container;
    });
  }

  nextItems(feed: FeedObject) {
    return feed.checkNextItems();
  }




}
