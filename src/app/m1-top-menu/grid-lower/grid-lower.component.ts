import { Component } from '@angular/core';
import { M1TopMenuComponent } from '../m1-top-menu.component';
import { AnasmoGlobals } from 'src/anasmo/global';

@Component({
  selector: 'app-grid-lower',
  templateUrl: './grid-lower.component.html',
  styleUrls: ['./grid-lower.component.css']
})
export class GridLowerComponent extends M1TopMenuComponent {

  stripeLink = AnasmoGlobals.STRIPE_LINK;

}
