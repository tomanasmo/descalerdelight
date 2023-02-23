import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M5OneImageWithDescriptionComponent } from './m5-one-image-with-description.component';

describe('M5OneImageWithDescriptionComponent', () => {
  let component: M5OneImageWithDescriptionComponent;
  let fixture: ComponentFixture<M5OneImageWithDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M5OneImageWithDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M5OneImageWithDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
