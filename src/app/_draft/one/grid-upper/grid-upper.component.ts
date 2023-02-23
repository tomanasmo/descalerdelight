import { Component, OnInit } from '@angular/core';
import { OneComponent } from '../one.component';

@Component({
  selector: 'app-grid-upper',
  templateUrl: './grid-upper.component.html',
  styleUrls: ['./grid-upper.component.css'],
})
export class GridUpperComponent extends OneComponent {

  // Show/hide menu.
  onClick() {
    this.doToggle();
  }
}