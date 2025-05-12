import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AnasmoGlobals } from 'src/anasmo/global';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  @Output() quantityChanged = new EventEmitter<number>();

  // Kalles når brukeren endrer antall
  /*onQuantityChange() {
    this.quantityChanged.emit(this.selectedQuantity); // Send signal til forelder
    console.log("HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALLLOOOOOOOOOOOOOO");
  }*/

  @Input() selectedQuantity: number = 1;
  @Input() language: string = "NO";
  text: any;
  textNo = [ "Steg 1: Velg antall", "MEST POPULÆR" ];
  textEn = [ "Step 1: Select Quantity", "MOST POPULAR" ];  
  selected: any;
  //isPhonePortrait = false;
  faSquareCheck = faSquareCheck;
  discountPercent = AnasmoGlobals.DISCOUNT_PERCENT;
  prices = AnasmoGlobals.PRICES;
  beforePrices = AnasmoGlobals.BEFORE_PRICES;
  currencySymbol = AnasmoGlobals.CURRENCY_SYMBOL;
  productName = AnasmoGlobals.PRODUCT_NAME;
  productNamePlural = AnasmoGlobals.PRODUCT_NAME_PLURAL;

  // Global variables.
  greenColor: string = "rgb(93, 204, 102) solid 3px";
  standardBorder: string = "lightgrey 3px solid";

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

    // Set default selection.    
    this.selected =  document.getElementById("box1x");
    if (this.selectedQuantity == 3) {    
      this.selected = document.getElementById("box3x");
      //AnasmoGlobals.CURRENT_PRICE = 1500;
    } else if (this.selectedQuantity == 2) {
      this.selected = document.getElementById("box2x");
      //AnasmoGlobals.CURRENT_PRICE = 1250;
    } else if (this.selectedQuantity == 1) {
      this.selected = document.getElementById("box1x");
      //AnasmoGlobals.CURRENT_PRICE = 750;
    }

    if (this.selected != null) {
      this.selected.style.border = this.greenColor;
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

  selectQuantity(event: any)
  {
    console.log(event.currentTarget.id);

    // Select.
    const current = document.getElementById(event.currentTarget.id);
    if (current != null)
    {
      current.style.border = this.greenColor;
    }

    // Unselect.
    //const box4x = document.getElementById("box4x");
    const box3x = document.getElementById("box3x");
    const box2x = document.getElementById("box2x");
    const box1x = document.getElementById("box1x");
    /*if (box4x != current && box4x != null) {
      if (box4x != null) {
        box4x.style.border = this.standardBorder;
        this.selectedQuantity = 3;
        AnasmoGlobals.CURRENT_PRICE = 150000;
      }
    }*/
    if (box3x != current && box3x != null) {
      if (box3x != null) {
        box3x.style.border = this.standardBorder;
        this.selectedQuantity = 3;
      }
    }
    if (box2x != current && box2x != null) {
      if (box2x != null) {
        box2x.style.border = this.standardBorder;
        this.selectedQuantity = 2;
      }
    }
    if (box1x != current && box1x != null) {
      if (box1x != null) {
        box1x.style.border = this.standardBorder;
        this.selectedQuantity = 1;
      }
    }

    switch (current) {

      case box3x:
        AnasmoGlobals.CURRENT_PRICE = 150000;
        break;
      case box2x:
        AnasmoGlobals.CURRENT_PRICE = 125000;
        break;
      case box1x:
        AnasmoGlobals.CURRENT_PRICE = 75000;
        break;  
    }

    this.quantityChanged.emit(this.selectedQuantity); // Send signal til forelder
    //console.log("HEEEEEEEEEEEEEEE: " + this.selectedQuantity);
  }
}