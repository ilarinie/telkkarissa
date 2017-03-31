import { Feed } from "./feed";
import { Item } from "./item";

export class FeedObject {

    channel: number;
    status: string;
    feed: Feed;
    items: Item[];
    nextItems: Item[];

    constructor() {
    }

    get coming() {
        const retItems: Item[] = [];
        for (const item of this.items) {
            if (item.pubDate > new Date()) {
                retItems.push(item);
            }
            if (retItems.length === 5) {
                break;
            }
        }
        return retItems;
    }

    getChannelName() {
        return this.feed.title;
    }

    checkNextItems(): Item[] {
        const retItems: Item[] = [];
        for (const item of this.items) {
            if (item.pubDate > new Date()) {
                retItems.push(item);
            }
            if (retItems.length === 5) {
                break;
            }
        }
        return retItems;
    }

}