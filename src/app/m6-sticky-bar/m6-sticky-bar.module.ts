import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M6StickyBarComponent } from './m6-sticky-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { M70OrderComponent } from '../m70-order/m70-order.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: 'bestill', component: M70OrderComponent },
];

// Enable Material icons.
const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    M6StickyBarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    M6StickyBarComponent
  ]
})
export class M6StickyBarModule { }
