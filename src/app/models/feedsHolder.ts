import { FeedObject } from "./feedObject";

export class FeedsHolder {
    feeds: FeedObject[];

    sanitizeContents() {
        for (const feedobj of this.feeds) {
            feedobj.feed.title = feedobj.feed.title.substring(9, feedobj.feed.title.length);
            feedobj.channel = this.channelNumber(feedobj.feed.title);
            for (const item of feedobj.items) {
                item.title = item.title.substr(5, item.title.length)
            }
        }
    }

    channelNumber(title: string) {
        if (title.indexOf('YLE1') !== -1) {
            return 1;
        }
        if (title.indexOf('YLE2') !== -1) {
            return 2;
        }
        if (title.indexOf('MTV3') !== -1 && title.length < 6) {
            return 3;
        }
        if (title.indexOf('Nelonen') !== -1) {
            return 4;
        }
        if (title.indexOf('SubTV') !== -1) {
            return 6;
        }
        if (title.indexOf('YLE Teema') !== -1) {
            return 7;
        }
        if (title.indexOf('Liv') !== -1) {
            return 8;
        }
        if (title.indexOf('JIM') !== -1) {
            return 9;
        }
        if (title.indexOf('TV Viisi') !== -1) {
            return 10;
        }
        if (title.indexOf('Kutonen') !== -1) {
            return 11;
        }
        if (title.indexOf('FOX') !== -1) {
            return 12;
        }
        if (title.indexOf('Ava') !== -1) {
            return 13;
        }
        if (title.indexOf('Hero') !== -1) {
            return 14;
        }
        if (title.indexOf('Frii') !== -1) {
            return 15;
        }
        if (title.indexOf('TLC') !== -1) {
            return 18;
        }
        if (title.indexOf('National Geographic') !== -1) {
            return 20;
        }
        if (title.indexOf('MTV Finland') !== -1) {
            return 50;
        }
    }

    sortFeeds() {
        this.feeds = this.feeds.sort(this.sort);
    }

    sort(a, b) {
        return a.channel - b.channel;
    }
}