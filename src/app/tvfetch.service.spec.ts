import { TestBed, inject } from '@angular/core/testing';

import { TvfetchService } from './tvfetch.service';

describe('TvfetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvfetchService]
    });
  });

  it('should ...', inject([TvfetchService], (service: TvfetchService) => {
    expect(service).toBeTruthy();
  }));
});
