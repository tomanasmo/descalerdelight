import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M70OrderComponent } from './m70-order.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Step1Component } from './step1/step1.component';
import { Step0Component } from './step0/step0.component';


@NgModule({
  declarations: [
    M70OrderComponent,
    Step1Component,
    Step0Component
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    M70OrderComponent
  ]
})
export class M70OrderModule { }
