import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M8DraftComponent } from './m8-draft.component';

describe('M8DraftComponent', () => {
  let component: M8DraftComponent;
  let fixture: ComponentFixture<M8DraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M8DraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M8DraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
