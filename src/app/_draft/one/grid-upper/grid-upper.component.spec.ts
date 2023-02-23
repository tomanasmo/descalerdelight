import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUpperComponent } from './grid-upper.component';

describe('GridUpperComponent', () => {
  let component: GridUpperComponent;
  let fixture: ComponentFixture<GridUpperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridUpperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridUpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
