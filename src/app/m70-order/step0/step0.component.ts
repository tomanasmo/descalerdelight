import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AnasmoGlobals } from 'src/anasmo/global';

@Component({
  selector: 'app-step0',
  templateUrl: './step0.component.html',
  styleUrls: ['./step0.component.css']
})
export class Step0Component implements OnInit {

  @Input() language: string = 'NO';
  text: any;
  textNo = [ "Din rabatt på", "% har blitt lagt til", "TIDSBEGRENSET TILBUD", "er tilgjengelig for", "rabatt pr. enhet" ];
  textEn = [ "Your", "% Discount Has Been Applied", "LIMITED TIME OFFER", "is available at the price of", "Discount Per Unit" ];  
  isPhonePortrait = false;
  discountPercent = AnasmoGlobals.DISCOUNT_PERCENT;
  prices = AnasmoGlobals.PRICES;
  beforePrices = AnasmoGlobals.BEFORE_PRICES;
  currencySymbol = AnasmoGlobals.CURRENCY_SYMBOL;
  productName = AnasmoGlobals.PRODUCT_NAME;
  currentPrice = AnasmoGlobals.CURRENT_PRICE;

  constructor(private responsive: BreakpointObserver) {}
  
  ngOnInit(): void {
    
    if (this.language == "EN") {
      this.text = this.textEn;
    } else {
      this.text = this.textNo;
    }

    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {

        this.isPhonePortrait = false; 

        if (result.matches) {
          this.isPhonePortrait = true;
        }
    });

  }
}
