import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M40TrackOrderComponent } from './m40-track-order.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    M40TrackOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    M40TrackOrderComponent
  ]
})
export class M40TrackOrderModule { }
