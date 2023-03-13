import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M14LiveMatchComponent } from './m14-live-match.component';

describe('M14LiveMatchComponent', () => {
  let component: M14LiveMatchComponent;
  let fixture: ComponentFixture<M14LiveMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M14LiveMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M14LiveMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
