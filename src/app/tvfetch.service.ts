import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class TvfetchService {

  baseUrl: string = "https://telkussa.fi/RSS/Channel";
  channels: string[] = [
    '/1', // YLE 1
    '/2', // YLE 2
    '/3', // MTV 3
    '/4', //
    '/5',
    '/6',
    '/7',
    '/8',
    '/9',
    '/10',
    '/11',
    '/12',
    '/13',
    '/14',
    '/15',
    '/16',
    '/17',
    '/18',
    '/20'
  ];

  constructor(private http: Http) {

  }

  getData(){

  }

}
