import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M51LandingPageGetEmailComponent } from './m51-landing-page-get-email.component';

describe('M51LandingPageGetEmailComponent', () => {
  let component: M51LandingPageGetEmailComponent;
  let fixture: ComponentFixture<M51LandingPageGetEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M51LandingPageGetEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M51LandingPageGetEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
