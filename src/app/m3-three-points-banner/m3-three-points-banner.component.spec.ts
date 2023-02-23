import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3ThreePointsBannerComponent } from './m3-three-points-banner.component';

describe('M3ThreePointsBannerComponent', () => {
  let component: M3ThreePointsBannerComponent;
  let fixture: ComponentFixture<M3ThreePointsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3ThreePointsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M3ThreePointsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
