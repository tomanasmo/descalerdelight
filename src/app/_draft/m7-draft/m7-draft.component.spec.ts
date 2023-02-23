import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M7DraftComponent } from './m7-draft.component';

describe('M7DraftComponent', () => {
  let component: M7DraftComponent;
  let fixture: ComponentFixture<M7DraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M7DraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M7DraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
