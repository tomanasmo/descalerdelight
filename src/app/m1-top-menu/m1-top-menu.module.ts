import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridUpperComponent } from './grid-upper/grid-upper.component';
import { GridLowerComponent } from './grid-lower/grid-lower.component';
import { M1TopMenuComponent } from './m1-top-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { M40TrackOrderComponent } from '../m40-track-order/m40-track-order.component';
import { M60ContactComponent } from '../m60-contact/m60-contact.component';
import { M70OrderComponent } from '../m70-order/m70-order.component';
import { AnasmoGlobals } from 'src/anasmo/global';


const routes: Routes = [
  { path: 'sporing', component: M40TrackOrderComponent },
  { path: 'kontakt', component: M60ContactComponent },
  { path: 'bestill',
    component: M70OrderComponent,
    resolve: { url: 'redirect' },
    data: { externalUrl: AnasmoGlobals.STRIPE_LINK }
  },
];

const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    GridUpperComponent,
    GridLowerComponent,
    M1TopMenuComponent
  ],
  imports: [
    CommonModule,
    materialModules,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    GridUpperComponent,
    GridLowerComponent,
    M1TopMenuComponent
  ],
  providers: [
    {
        provide: 'redirect',
        useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
        {
            window.location.href = (route.data as any).externalUrl;
        }
    }
  ]
})
export class M1TopMenuModule { }
