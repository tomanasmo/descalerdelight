import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M1TopMenuComponent } from './m1-top-menu.component';

describe('M1TopMenuComponent', () => {
  let component: M1TopMenuComponent;
  let fixture: ComponentFixture<M1TopMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M1TopMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M1TopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
