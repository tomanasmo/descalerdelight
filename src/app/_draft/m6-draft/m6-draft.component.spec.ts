import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M6DraftComponent } from './m6-draft.component';

describe('M6DraftComponent', () => {
  let component: M6DraftComponent;
  let fixture: ComponentFixture<M6DraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M6DraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M6DraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
