import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AnasmoGlobals } from 'src/anasmo/global';
import { PixelService } from 'ngx-pixel';

declare var gtag: (arg0: string, arg1: string, arg2: { event_category: string; event_label: string; value: string; }) => void;

@Component({
  selector: 'app-m6-sticky-bar',
  templateUrl: './m6-sticky-bar.component.html',
  styleUrls: ['./m6-sticky-bar.component.css']
})
export class M6StickyBarComponent implements OnInit {

  discountPercent = AnasmoGlobals.BUTTON_DISCOUNT_PERCENT;
  stripeLink = AnasmoGlobals.STRIPE_LINK;

  isMedium = false;
  isSmall = false;
  isBig = false;
    
  smallScreenBreakpoints = "(max-width: 549.98px)";
  mediumScreenBreakpoints = "(min-width: 550px) and (max-width: 749.98px)";

  constructor(private responsive: BreakpointObserver, private pixel: PixelService) {}
  
  ngOnInit() {

    // https://material.angular.io/cdk/layout/overview
    this.responsive.observe(      
      this.smallScreenBreakpoints + ", " + this.mediumScreenBreakpoints
      ).subscribe(result => {

        if (this.responsive.isMatched(this.mediumScreenBreakpoints)) {
          console.log("MEDIUM");   
          this.isMedium = true;
          this.isSmall = false;
          this.isBig = false;
        } else if (this.responsive.isMatched(this.smallScreenBreakpoints)) {
          console.log("SMALL");
          this.isSmall = true;
          this.isMedium = false;
          this.isBig = false;         
        } else {
          console.log("BIG");
          this.isMedium = false;
          this.isSmall = false;
          this.isBig = true;
        }

    });
  }

  doTracking() {

    console.log("GTracking!");
    gtag('event', 'CTA_M6_STICKY_BAR_BUTTON_CLICKED', {
      'event_category': 'CTA_BUTTON_CLICK',
      'event_label': 'CTA_M6_STICKY_BAR_BUTTON_CLICKED',
      'value': 'CTA_M6_STICKY_BAR_BUTTON_CLICKED'   });

    // FB pixel.
    console.log("PTracking!");    
    this.pixel.track('InitiateCheckout', {
      value: 211,
      currency: 'NOK'
    });
  }
}