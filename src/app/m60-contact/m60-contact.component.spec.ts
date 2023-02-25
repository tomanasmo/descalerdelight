import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M60ContactComponent } from './m60-contact.component';

describe('M60ContactComponent', () => {
  let component: M60ContactComponent;
  let fixture: ComponentFixture<M60ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M60ContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M60ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
