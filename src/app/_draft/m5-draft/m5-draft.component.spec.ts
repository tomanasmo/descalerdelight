import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M5DraftComponent } from './m5-draft.component';

describe('M5DraftComponent', () => {
  let component: M5DraftComponent;
  let fixture: ComponentFixture<M5DraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M5DraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M5DraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
