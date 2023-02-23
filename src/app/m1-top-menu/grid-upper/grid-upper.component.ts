import { Component, OnInit } from '@angular/core';
import { M1TopMenuComponent } from '../m1-top-menu.component';

@Component({
  selector: 'app-grid-upper',
  templateUrl: './grid-upper.component.html',
  styleUrls: ['./grid-upper.component.css'],
})
export class GridUpperComponent extends M1TopMenuComponent {

  // Show/hide menu.
  onClick() {
    this.doToggle();
  }
}