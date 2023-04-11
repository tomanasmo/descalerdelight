import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { M1TopMenuService } from './m1-top-menu.service'
import { PixelService } from 'ngx-pixel';

declare var gtag: (arg0: string, arg1: string, arg2: { event_category: string; event_label: string; value: string; }) => void;

@Component({
  selector: 'app-m1-top-menu',
  templateUrl: './m1-top-menu.component.html',
  styleUrls: ['./m1-top-menu.component.css']
})
export class M1TopMenuComponent implements OnInit {

  @Input() language: string = "NO";
  text: any;
  textNo = [ "SPOR BESTILLING", "KONTAKT OSS", "PRØV NÅ!" ];
  textEn = [ "TRACK ORDER", "CONTACT", "ORDER NOW!" ];
  
  isMedium = false;
  isSmall = false;
  isBig = false;
    
  smallScreenBreakpoints = "(max-width: 549.98px)";
  mediumScreenBreakpoints = "(min-width: 550px) and (max-width: 749.98px)";

  constructor(private responsive: BreakpointObserver, private m1TopMenuService: M1TopMenuService, private pixel: PixelService) {}
  /*constructor(responsive: BreakpointObserver, private m1TopMenuService: M1TopMenuService) {
    super(responsive);
  }*/

  showMenu = false;

  getToggle(): boolean {
    return this.m1TopMenuService.getToggle();
  }

  doToggle(): void {
    this.m1TopMenuService.doToggle();
  }

  doTracking() {

    // Google Analytics.
    console.log("GTracking!");
    gtag('event', 'CTA_M1_TOP_MENU_BUTTON_CLICKED', {
      'event_category': 'CTA_BUTTON_CLICK',
      'event_label': 'CTA_M1_TOP_MENU_BUTTON_CLICKED',
      'value': 'CTA_M1_TOP_MENU_BUTTON_CLICKED'   });

   // FB pixel.
   console.log("PTracking!");
    this.pixel.track('InitiateCheckout', {
      value: 211,
      currency: 'NOK'
    });
  }

  ngOnInit() {

    if (this.language == "EN") {
      this.text = this.textEn;
    } else {
      this.text = this.textNo;
    }

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
}