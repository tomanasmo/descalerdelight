import { TestBed } from '@angular/core/testing';

import { M1TopMenuService } from './m1-top-menu.service';

describe('M1TopMenuService', () => {
  let service: M1TopMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M1TopMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
