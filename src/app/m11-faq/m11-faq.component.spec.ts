import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M11FaqComponent } from './m11-faq.component';

describe('M11FaqComponent', () => {
  let component: M11FaqComponent;
  let fixture: ComponentFixture<M11FaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M11FaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M11FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
