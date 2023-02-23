import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M3ThreePointsBannerComponent } from './m3-three-points-banner.component';

// Enable Material icons.
import { MatIconModule } from '@angular/material/icon';
const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    M3ThreePointsBannerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    M3ThreePointsBannerComponent
  ]
})
export class M3ThreePointsBannerModule { }
