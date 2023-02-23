import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M10DraftComponent } from './m10-draft.component';

describe('M10DraftComponent', () => {
  let component: M10DraftComponent;
  let fixture: ComponentFixture<M10DraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M10DraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M10DraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
