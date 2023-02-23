import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component implements OnInit {

  @Input() language: string = "NO";
  text: any;
  textNo = [ "SPOR BESTILLING", "KONTAKT OSS", "BESTILL NÅ!" ];
  textEn = [ "TRACK ORDER", "CONTACT", "ORDER NOW!" ];
  
  isMedium = false;
  isSmall = false;
  isBig = false;
  toggleMenu = false; // Used to toggle between show menu or not when medium screen or less.
  
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