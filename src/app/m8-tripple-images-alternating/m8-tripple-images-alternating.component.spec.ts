import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M8TrippleImagesAlternatingComponent } from './m8-tripple-images-alternating.component';

describe('M8TrippleImagesAlternatingComponent', () => {
  let component: M8TrippleImagesAlternatingComponent;
  let fixture: ComponentFixture<M8TrippleImagesAlternatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M8TrippleImagesAlternatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M8TrippleImagesAlternatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
