import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M5OneImageWithDescLeftAndBottomComponent } from './m5-one-image-with-desc-left-and-bottom.component';

describe('M5OneImageWithDescLeftAndBottomComponent', () => {
  let component: M5OneImageWithDescLeftAndBottomComponent;
  let fixture: ComponentFixture<M5OneImageWithDescLeftAndBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M5OneImageWithDescLeftAndBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M5OneImageWithDescLeftAndBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
