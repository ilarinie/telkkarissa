import { Component, OnInit, Input } from '@angular/core';
import { FeedObject } from '../models/feedObject';

@Component({
  selector: 'app-feedobject',
  templateUrl: './feedobject.component.html',
  styleUrls: ['./feedobject.component.scss']
})
export class FeedobjectComponent implements OnInit {
  @Input() feedObject: FeedObject;

  constructor() { }

  ngOnInit() {
  }

}
