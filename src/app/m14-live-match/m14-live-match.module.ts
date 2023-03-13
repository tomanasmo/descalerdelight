import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M14LiveMatchComponent } from './m14-live-match.component';

// Enable Material icons.
import { MatIconModule } from '@angular/material/icon';
const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    M14LiveMatchComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    M14LiveMatchComponent
  ]
})
export class M14LiveMatchModule { }
