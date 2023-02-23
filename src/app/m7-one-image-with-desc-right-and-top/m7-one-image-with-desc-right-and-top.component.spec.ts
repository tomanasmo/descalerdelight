import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M7OneImageWithDescRightAndTopComponent } from './m7-one-image-with-desc-right-and-top.component';

describe('M7OneImageWithDescRightAndTopComponent', () => {
  let component: M7OneImageWithDescRightAndTopComponent;
  let fixture: ComponentFixture<M7OneImageWithDescRightAndTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M7OneImageWithDescRightAndTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M7OneImageWithDescRightAndTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
