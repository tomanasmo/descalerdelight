import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AnasmoGlobals } from 'src/anasmo/global';
import { PixelService } from 'ngx-pixel';
import { HttpClient } from "@angular/common/http";

declare var gtag: (arg0: string, arg1: string, arg2: { event_category: string; event_label: string; value: string; }) => void;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() language: string = 'NO';
  text: any;
  textNo = [ "Rabatt", "Siste sjanse", "Siste dag til å benytte deg av dette FANTASTISKE tilbudet",
   "FÅ", "I RABATT",  "-kun", "(normal utsalgspris", ")", "-kun tilgjengelig på nett", "-så lenge lageret rekker" ];
  textEn = [ "MAKE IT SUPER", "EASY TO", "RECHARGE", "PEOPLE AROUND YOU" ];

  discountPercentTest = AnasmoGlobals.DISCOUNT_PERCENT_TEST;
  //prices = [110]; //AnasmoGlobals.PRICES;
  //beforePrices = [1053]; //AnasmoGlobals.BEFORE_PRICES;
  prices = AnasmoGlobals.PRICES_TEST;
  beforePrices = AnasmoGlobals.BEFORE_PRICES;
  currencySymbol = AnasmoGlobals.CURRENCY_SYMBOL;
  stripeLink = AnasmoGlobals.STRIPE_LINK;
  
  isMedium = false;
  isSmall = false;
  isBig = false;
    
  smallScreenBreakpoints = "(max-width: 549.98px)";
  mediumScreenBreakpoints = "(min-width: 550px) and (max-width: 749.98px)";

  constructor(private responsive: BreakpointObserver, private pixel: PixelService, private http:HttpClient) {}
  
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

  doTracking() {

    // Google Analytics.
    console.log("GTracking!");
    gtag('event', 'CTA_M2_TOP_BANNER_BUTTON_CLICKED', {
      'event_category': 'CTA_BUTTON_CLICK',
      'event_label': 'CTA_M2_TOP_BANNER_BUTTON_CLICKED',
      'value': 'CTA_M2_TOP_BANNER_BUTTON_CLICKED'   });    

    // FB pixel.
    console.log("PTracking!");
    this.pixel.track('InitiateCheckout', {
      value: 211,
      currency: 'NOK'
    });

    // Prøv API her!
    
  }
}