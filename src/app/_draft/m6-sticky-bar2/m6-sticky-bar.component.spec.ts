import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M6StickyBarComponent2 } from './m6-sticky-bar.component';

describe('M6StickyBarComponent', () => {
  let component: M6StickyBarComponent2;
  let fixture: ComponentFixture<M6StickyBarComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M6StickyBarComponent2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M6StickyBarComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
