import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { M1TopMenuModule } from './m1-top-menu/m1-top-menu.module';
import { M2TopBannerModule } from './m2-top-banner/m2-top-banner.module';
import { M3ThreePointsBannerModule } from './m3-three-points-banner/m3-three-points-banner.module';
import { M4ThreeHorizontalBarModule } from './m4-three-horizontal-bar/m4-three-horizontal-bar.module';
import { M5OneImageWithDescLeftAndBottomModule } from './m5-one-image-with-desc-left-and-bottom/m5-one-image-with-desc-left-and-bottom.module';
import { M6StickyBarModule } from './m6-sticky-bar/m6-sticky-bar.module';
import { M0CoreModule } from './m0-core/m0-core.module';
import { M7OneImageWithDescRightAndTopModule } from './m7-one-image-with-desc-right-and-top/m7-one-image-with-desc-right-and-top.module';
import { M8TrippleImagesAlternatingModule } from './m8-tripple-images-alternating/m8-tripple-images-alternating.module';
import { M9DraftModule } from './m9-draft/m9-draft.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    M1TopMenuModule,
    M2TopBannerModule,
    M3ThreePointsBannerModule,
    M4ThreeHorizontalBarModule,
    M5OneImageWithDescLeftAndBottomModule,
    M0CoreModule,
    M6StickyBarModule,
    M7OneImageWithDescRightAndTopModule,
    M8TrippleImagesAlternatingModule,
    M9DraftModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
