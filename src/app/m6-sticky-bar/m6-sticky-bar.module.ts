import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M6StickyBarComponent } from './m6-sticky-bar.component';

// Enable Material icons.
import { MatIconModule } from '@angular/material/icon';
const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    M6StickyBarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    M6StickyBarComponent
  ]
})
export class M6StickyBarModule { }
