import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M50LandingPageComponent } from './m50-landing-page.component';

describe('M50LandingPageComponent', () => {
  let component: M50LandingPageComponent;
  let fixture: ComponentFixture<M50LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M50LandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M50LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
