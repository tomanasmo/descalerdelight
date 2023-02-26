import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M9DraftComponent } from './m9-draft.component';
import { Routes, RouterModule } from '@angular/router';
import { M70OrderComponent } from '../m70-order/m70-order.component';

const routes: Routes = [
  { path: 'bestill', component: M70OrderComponent },
];


@NgModule({
  declarations: [
    M9DraftComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    M9DraftComponent
  ]
})
export class M9DraftModule { }
