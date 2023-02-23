import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2c1Component } from './m2c1.component';

describe('M2c1Component', () => {
  let component: M2c1Component;
  let fixture: ComponentFixture<M2c1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2c1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
