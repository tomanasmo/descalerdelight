import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3DraftComponent } from './m3-draft.component';

describe('M3DraftComponent', () => {
  let component: M3DraftComponent;
  let fixture: ComponentFixture<M3DraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3DraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M3DraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
