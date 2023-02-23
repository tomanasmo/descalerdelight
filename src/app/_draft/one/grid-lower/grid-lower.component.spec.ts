import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLowerComponent } from './grid-lower.component';

describe('GridLowerComponent', () => {
  let component: GridLowerComponent;
  let fixture: ComponentFixture<GridLowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridLowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridLowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
