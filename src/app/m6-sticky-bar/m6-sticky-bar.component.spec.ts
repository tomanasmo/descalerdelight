import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M6StickyBarComponent } from './m6-sticky-bar.component';

describe('M6StickyBarComponent', () => {
  let component: M6StickyBarComponent;
  let fixture: ComponentFixture<M6StickyBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M6StickyBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M6StickyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
