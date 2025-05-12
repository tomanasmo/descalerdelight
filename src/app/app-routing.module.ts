import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { M50LandingPageComponent } from './m50-landing-page/m50-landing-page.component';
import { M51LandingPageGetEmailComponent } from './m51-landing-page-get-email/m51-landing-page-get-email.component';
import { WhyComponent } from "./articles/why/why.component";
import { LongevityComponent } from "./articles/longevity/longevity.component";
import { TasteComponent } from "./articles/taste/taste.component";
import { EfficiencyComponent } from "./articles/efficiency/efficiency.component";
import { HygieneComponent } from "./articles/hygiene/hygiene.component";
import { AnalyseComponent } from "./analyse/analyse/analyse.component";
import { SubscriptionsComponent } from "./subscriptions/subscriptions.component";
import { M70OrderComponent } from './m70-order/m70-order.component';

const routes: Routes = [
  { path: '', component: M50LandingPageComponent },
  //{ path: 'fem-typiske-feil-som-gjor-at-du-alltid-mangler-lading', component: M51LandingPageGetEmailComponent },
  { path: 'ordre', component: M70OrderComponent },
  { path: 'hvorfor-avkalke-kaffemaskinen-din', component: WhyComponent },
  { path: 'forlenge-levetiden-til-kaffemaskinen', component: LongevityComponent },
  { path: 'bevare-den-beste-kaffesmaken', component: TasteComponent },
  { path: 'oke-effektiviteten-og-spare-energi', component: EfficiencyComponent },
  { path: 'unnga-bakterier-og-hygieniske-problemer', component: HygieneComponent },
  { path: 'analyse', component: AnalyseComponent },
  { path: 'planer', component: SubscriptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
