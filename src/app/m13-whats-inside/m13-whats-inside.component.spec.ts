import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M13WhatsInsideComponent } from './m13-whats-inside.component';

describe('M13WhatsInsideComponent', () => {
  let component: M13WhatsInsideComponent;
  let fixture: ComponentFixture<M13WhatsInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M13WhatsInsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M13WhatsInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
