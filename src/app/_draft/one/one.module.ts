import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import { GridUpperComponent } from './grid-upper/grid-upper.component';
import { GridLowerComponent } from './grid-lower/grid-lower.component';
import { OneComponent } from './one.component';

// Enable Material icons.
import { MatIconModule } from '@angular/material/icon';
const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    MenuComponent,
    Menu2Component,
    Menu3Component,
    MainMenuComponent,
    GridUpperComponent,
    GridLowerComponent,
    OneComponent
  ],
  imports: [
    CommonModule,
    materialModules
  ],
  exports: [
    MenuComponent,
    Menu2Component,
    Menu3Component,
    GridUpperComponent,
    GridLowerComponent,
    OneComponent
  ]
})
export class OneModule { }
