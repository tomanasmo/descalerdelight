import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M9DraftComponent } from './m9-draft.component';

describe('M9DraftComponent', () => {
  let component: M9DraftComponent;
  let fixture: ComponentFixture<M9DraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M9DraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M9DraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
