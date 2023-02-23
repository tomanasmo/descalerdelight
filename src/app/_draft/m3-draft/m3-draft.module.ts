import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M3DraftComponent } from './m3-draft.component';

// Enable Material icons.
import { MatIconModule } from '@angular/material/icon';
const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    M3DraftComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    M3DraftComponent
  ]
})
export class M3DraftModule { }
