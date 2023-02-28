import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-m60-contact',
  templateUrl: './m60-contact.component.html',
  styleUrls: ['./m60-contact.component.css']
})
export class M60ContactComponent implements OnInit {

  constructor(private responsive: BreakpointObserver) {}

  isMedium = false;
  isSmall = false;
  isBig = false;
    
  smallScreenBreakpoints = "(max-width: 549.98px)";
  mediumScreenBreakpoints = "(min-width: 550px) and (max-width: 749.98px)";

  ngOnInit()
  {
    /*if (this.language == "EN") {
      this.text = this.textEn;
    } else {
      this.text = this.textNo;
    }*/

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