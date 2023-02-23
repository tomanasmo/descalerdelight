import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M12WhyChooseComponent } from './m12-why-choose.component';

describe('M12WhyChooseComponent', () => {
  let component: M12WhyChooseComponent;
  let fixture: ComponentFixture<M12WhyChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M12WhyChooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M12WhyChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
