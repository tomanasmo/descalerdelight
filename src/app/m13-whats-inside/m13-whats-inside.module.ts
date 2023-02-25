import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M13WhatsInsideComponent } from './m13-whats-inside.component';

// Enable Material icons.
import { MatIconModule } from '@angular/material/icon';
const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    M13WhatsInsideComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    M13WhatsInsideComponent
  ]
})
export class M13WhatsInsideModule { }
