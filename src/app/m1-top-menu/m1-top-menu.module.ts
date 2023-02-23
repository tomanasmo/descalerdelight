import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridUpperComponent } from './grid-upper/grid-upper.component';
import { GridLowerComponent } from './grid-lower/grid-lower.component';
import { M1TopMenuComponent } from './m1-top-menu.component';

// Enable Material icons.
import { MatIconModule } from '@angular/material/icon';
const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    GridUpperComponent,
    GridLowerComponent,
    M1TopMenuComponent
  ],
  imports: [
    CommonModule,
    materialModules
  ],
  exports: [
    GridUpperComponent,
    GridLowerComponent,
    M1TopMenuComponent
  ]
})
export class M1TopMenuModule { }
