import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4ThreeHorizontalBarComponent } from './m4-three-horizontal-bar.component';

describe('M4ThreeHorizontalBarComponent', () => {
  let component: M4ThreeHorizontalBarComponent;
  let fixture: ComponentFixture<M4ThreeHorizontalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4ThreeHorizontalBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M4ThreeHorizontalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
