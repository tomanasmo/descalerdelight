import { TestBed } from '@angular/core/testing';

import { M40TrackOrderService } from './m40-track-order.service';

describe('M40TrackOrderService', () => {
  let service: M40TrackOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M40TrackOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
