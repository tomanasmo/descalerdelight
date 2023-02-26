import { TestBed } from '@angular/core/testing';

import { M6StickyBarService } from './m6-sticky-bar.service';

describe('M6StickyBarService', () => {
  let service: M6StickyBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M6StickyBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
