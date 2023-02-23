import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4DraftComponent } from './m4-draft.component';

describe('M4DraftComponent', () => {
  let component: M4DraftComponent;
  let fixture: ComponentFixture<M4DraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4DraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M4DraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
