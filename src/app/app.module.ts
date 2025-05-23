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
import { M9OneImageWithDescLeftAndBottomModule } from './m9-one-image-with-desc-left-and-bottom/m9-one-image-with-desc-left-and-bottom.module';
import { M92OneImageWithDescLeftAndBottomModule } from './m92-one-image-with-desc-left-and-bottom/m92-one-image-with-desc-left-and-bottom.module';
import { M6StickyBarModule } from './m6-sticky-bar/m6-sticky-bar.module';
import { M0CoreModule } from './m0-core/m0-core.module';
import { M7OneImageWithDescRightAndTopModule } from './m7-one-image-with-desc-right-and-top/m7-one-image-with-desc-right-and-top.module';
import { M91OneImageWithDescRightAndTopModule } from './m91-one-image-with-desc-right-and-top/m91-one-image-with-desc-right-and-top.module';
import { M8TrippleImagesAlternatingModule } from './m8-tripple-images-alternating/m8-tripple-images-alternating.module';
import { M9DraftModule } from './m9-draft/m9-draft.module';
import { M10DraftModule } from './m10-draft/m10-draft.module';
import { M11FaqModule } from './m11-faq/m11-faq.module';
import { M12WhyChooseModule } from './m12-why-choose/m12-why-choose.module';
import { M13WhatsInsideModule } from './m13-whats-inside/m13-whats-inside.module';
import { M30FooterModule } from './m30-footer/m30-footer.module';
import { M40TrackOrderModule } from './m40-track-order/m40-track-order.module';
import { M50LandingPageModule } from './m50-landing-page/m50-landing-page.module';
import { M51LandingPageGetEmailModule } from './m51-landing-page-get-email/m51-landing-page-get-email.module';
import { M60ContactModule } from './m60-contact/m60-contact.module';
import { M70OrderModule } from './m70-order/m70-order.module';
import { M6StickyBarModule2 } from './_draft/m6-sticky-bar2/m6-sticky-bar.module';
import { M14LiveMatchModule } from './m14-live-match/m14-live-match.module';
import { PixelModule } from 'ngx-pixel';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,    
    /*AngularFireModule.initializeApp(firebaseConfig),*/
    /*AngularFireAnalyticsModule,*/
    PixelModule.forRoot({ enabled: true, pixelId: '1293114901562517' }),
    AppRoutingModule,    
    BrowserAnimationsModule,
    M1TopMenuModule,
    M2TopBannerModule,
    M3ThreePointsBannerModule,
    M4ThreeHorizontalBarModule,
    M5OneImageWithDescLeftAndBottomModule,
    M9OneImageWithDescLeftAndBottomModule,
    M92OneImageWithDescLeftAndBottomModule,
    M0CoreModule,
    M6StickyBarModule,
    M6StickyBarModule2,
    M7OneImageWithDescRightAndTopModule,
    M91OneImageWithDescRightAndTopModule,
    M8TrippleImagesAlternatingModule,
    M9DraftModule,
    M10DraftModule,
    M11FaqModule,
    M12WhyChooseModule,
    M13WhatsInsideModule,
    M14LiveMatchModule,
    M30FooterModule,
    M40TrackOrderModule,
    M50LandingPageModule,
    M51LandingPageGetEmailModule,
    M60ContactModule,
    M70OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
