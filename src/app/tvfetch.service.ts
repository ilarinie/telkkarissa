import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { FeedsHolder } from "./models/feedsHolder";
import { Subject } from "rxjs/Subject";
import { FeedObject } from "./models/feedObject";

@Injectable()
export class TvfetchService {

  container: FeedsHolder;

  change: Subject<FeedsHolder> = new Subject<FeedsHolder>();

  baseUrl = 'https://api.rss2json.com/v1/api.json?api_key=kythj3xuwpuaalzkpz6n2fhcdlpg3e8xh8qcn1wi&rss_url=https://telkussa.fi/RSS/Channel';

  channels: string[] = [
    '/1', // YLE 1
    '/2', // YLE 2
    '/3', // MTV 3
    '/4', // Nelonen
    '/5', // Subtv
    '/12', // TLC
    '/14', // Teema
    '/32', // MTV FINLAND
    '/47', // NAT GEO
    '/56', // JIM
    '/60', // AVA
    '/63', // LIV
    '/64', // Kutonen
    '/77', // FOX
    '/88', // TV5
    '/103', // Hero
    '/104' // Frii
  ];

  constructor(private http: Http) {
    this.container = new FeedsHolder();
    this.container.feeds = [];
    this.getFeeds();
    setInterval(() => {
      this.getFeeds();
    }, 60000);
  }

  updateFeeds() {
    this.container.sanitizeContents();
    this.container.sortFeeds();
    this.change.next(this.container);
  }

  getFeeds() {
    console.debug("Fetching feeds..");
    this.container.feeds = [];
    for (let i = 0; i < this.channels.length; i++) {
      this.getFeed(this.baseUrl + this.channels[i]).then((res) => {
        console.log(res)
        this.container.feeds.push(res);
        if (this.container.feeds.length === 17) {
          this.updateFeeds();
        }
      });

    }
  }
  getFeed(url: string): Promise<FeedObject> {
    return this.http
      .get(url)
      .toPromise()
      .then(res => res.json() as FeedObject)
      .catch((err) => {
        console.error(err);
      });
  }



}
