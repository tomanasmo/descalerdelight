import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M2TopBannerComponent } from './m2-top-banner.component';
import { Routes, RouterModule } from '@angular/router';
import { M70OrderComponent } from '../m70-order/m70-order.component';

const routes: Routes = [
  { path: 'bestill', component: M70OrderComponent },
];

@NgModule({
  declarations: [
    M2TopBannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    M2TopBannerComponent
  ]
})
export class M2TopBannerModule { }
