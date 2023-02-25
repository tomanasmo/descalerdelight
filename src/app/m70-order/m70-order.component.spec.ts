import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M70OrderComponent } from './m70-order.component';

describe('M70OrderComponent', () => {
  let component: M70OrderComponent;
  let fixture: ComponentFixture<M70OrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M70OrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M70OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
