import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M9OneImageWithDescLeftAndBottomComponent } from './m9-one-image-with-desc-left-and-bottom.component';

describe('M9OneImageWithDescLeftAndBottomComponent', () => {
  let component: M9OneImageWithDescLeftAndBottomComponent;
  let fixture: ComponentFixture<M9OneImageWithDescLeftAndBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M9OneImageWithDescLeftAndBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M9OneImageWithDescLeftAndBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
