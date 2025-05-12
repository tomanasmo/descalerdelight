import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AnasmoGlobals } from 'src/anasmo/global';

@Component({
  selector: 'app-m92-one-image-with-desc-left-and-bottom',
  templateUrl: './m92-one-image-with-desc-left-and-bottom.component.html',
  styleUrls: ['./m92-one-image-with-desc-left-and-bottom.component.css']
})
export class M92OneImageWithDescLeftAndBottomComponent implements OnInit {

  @Input() language: string = 'NO';
  text: any;
  textNo = [ "Rabatt", "Siste sjanse", "Siste dag til å benytte deg av dette FANTASTISKE tilbudet",
   "FÅ", "I RABATT",  "-kun", "vs.", "(butikkpris)", "-kun tilgjengelig på nett", "-så lenge lageret rekker" ];
  textEn = [ "MAKE IT SUPER", "EASY TO", "RECHARGE", "PEOPLE AROUND YOU" ];

  discountPercent = AnasmoGlobals.DISCOUNT_PERCENT;
  prices = AnasmoGlobals.PRICES;
  beforePrices = AnasmoGlobals.BEFORE_PRICES;
  currencySymbol = AnasmoGlobals.CURRENCY_SYMBOL;
  
  isMedium = false;
  isSmall = false;
  isBig = false;
    
  smallScreenBreakpoints = "(max-width: 549.98px)";
  mediumScreenBreakpoints = "(min-width: 550px) and (max-width: 749.98px)";

  constructor(private responsive: BreakpointObserver) {}
  
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