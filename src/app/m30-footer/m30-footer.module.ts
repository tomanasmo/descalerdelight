import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M30FooterComponent } from './m30-footer.component';
import { UserTermsComponent } from './user-terms/user-terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ReturnComponent } from './return/return.component';
import { FaqComponent } from './faq/faq.component';
import { RouterModule, Routes } from '@angular/router';
import { M40TrackOrderComponent } from '../m40-track-order/m40-track-order.component';

const routes: Routes = [
  { path: 'brukervilkår', component: UserTermsComponent },
  { path: 'personvern', component: PrivacyComponent },
  { path: 'leveringsvilkår', component: DeliveryComponent },
  { path: 'sporing', component: M40TrackOrderComponent },
  { path: 'retur', component: ReturnComponent },
  { path: 'spørsmål', component: FaqComponent },
];

@NgModule({
  declarations: [
    M30FooterComponent,
    UserTermsComponent,
    PrivacyComponent,
    DeliveryComponent,
    ReturnComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    M30FooterComponent,
    UserTermsComponent,
    PrivacyComponent,
    DeliveryComponent,
    ReturnComponent,
    FaqComponent
  ]
})
export class M30FooterModule { }
