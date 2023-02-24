import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M12WhyChooseComponent } from './m12-why-choose.component';

// Enable Material icons.
import { MatIconModule } from '@angular/material/icon';
const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    M12WhyChooseComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    M12WhyChooseComponent
  ]
})
export class M12WhyChooseModule { }
