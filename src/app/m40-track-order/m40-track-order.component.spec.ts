import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M40TrackOrderComponent } from './m40-track-order.component';

describe('M40TrackOrderComponent', () => {
  let component: M40TrackOrderComponent;
  let fixture: ComponentFixture<M40TrackOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M40TrackOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M40TrackOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
