import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { M50LandingPageComponent } from './m50-landing-page/m50-landing-page.component';
import { M51LandingPageGetEmailComponent } from './m51-landing-page-get-email/m51-landing-page-get-email.component';

const routes: Routes = [
  { path: '', component: M50LandingPageComponent },
  { path: 'fem-typiske-feil-som-gjor-at-du-alltid-mangler-lading', component: M51LandingPageGetEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
