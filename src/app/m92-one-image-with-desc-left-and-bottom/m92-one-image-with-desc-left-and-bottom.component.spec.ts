import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M92OneImageWithDescLeftAndBottomComponent } from './m92-one-image-with-desc-left-and-bottom.component';

describe('M92OneImageWithDescLeftAndBottomComponent', () => {
  let component: M92OneImageWithDescLeftAndBottomComponent;
  let fixture: ComponentFixture<M92OneImageWithDescLeftAndBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M92OneImageWithDescLeftAndBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M92OneImageWithDescLeftAndBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
