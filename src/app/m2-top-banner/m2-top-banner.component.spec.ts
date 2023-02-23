import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2TopBannerComponent } from './m2-top-banner.component';

describe('M2TopBannerComponent', () => {
  let component: M2TopBannerComponent;
  let fixture: ComponentFixture<M2TopBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2TopBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2TopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
