import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M91OneImageWithDescRightAndTopComponent } from './m91-one-image-with-desc-right-and-top.component';

describe('M91OneImageWithDescRightAndTopComponent', () => {
  let component: M91OneImageWithDescRightAndTopComponent;
  let fixture: ComponentFixture<M91OneImageWithDescRightAndTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M91OneImageWithDescRightAndTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M91OneImageWithDescRightAndTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
