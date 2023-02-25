import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M30FooterComponent } from './m30-footer.component';

describe('M30FooterComponent', () => {
  let component: M30FooterComponent;
  let fixture: ComponentFixture<M30FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M30FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M30FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
