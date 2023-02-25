import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M50LandingPageComponent } from './m50-landing-page.component';
import { M2TopBannerModule } from '../m2-top-banner/m2-top-banner.module';
import { M3ThreePointsBannerModule } from '../m3-three-points-banner/m3-three-points-banner.module';
import { M4ThreeHorizontalBarModule } from '../m4-three-horizontal-bar/m4-three-horizontal-bar.module';
import { M6StickyBarModule } from '../m6-sticky-bar/m6-sticky-bar.module';
import { M7OneImageWithDescRightAndTopModule } from '../m7-one-image-with-desc-right-and-top/m7-one-image-with-desc-right-and-top.module';
import { M8TrippleImagesAlternatingModule } from '../m8-tripple-images-alternating/m8-tripple-images-alternating.module';
import { M9DraftModule } from '../m9-draft/m9-draft.module';
import { M10DraftModule } from '../m10-draft/m10-draft.module';
import { M11FaqModule } from '../m11-faq/m11-faq.module';
import { M12WhyChooseModule } from '../m12-why-choose/m12-why-choose.module';
import { M13WhatsInsideModule } from '../m13-whats-inside/m13-whats-inside.module';
import { M5OneImageWithDescLeftAndBottomModule } from '../m5-one-image-with-desc-left-and-bottom/m5-one-image-with-desc-left-and-bottom.module';

@NgModule({
  declarations: [
    M50LandingPageComponent
  ],
  imports: [
    CommonModule,
    M2TopBannerModule,
    M3ThreePointsBannerModule,
    M4ThreeHorizontalBarModule,
    M5OneImageWithDescLeftAndBottomModule,
    M6StickyBarModule,
    M7OneImageWithDescRightAndTopModule,
    M8TrippleImagesAlternatingModule,
    M9DraftModule,
    M10DraftModule,
    M11FaqModule,
    M12WhyChooseModule,
    M13WhatsInsideModule
  ],
  exports: [
    M50LandingPageComponent
  ]
})
export class M50LandingPageModule { }
