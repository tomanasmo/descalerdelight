import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M6DraftComponent } from './m6-draft.component';

// Enable Material icons.
import { MatIconModule } from '@angular/material/icon';
const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    M6DraftComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    M6DraftComponent
  ]
})
export class M6DraftModule { }
