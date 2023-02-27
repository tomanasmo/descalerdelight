import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AnasmoGlobals } from 'src/anasmo/global';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-m70-order',
  templateUrl: './m70-order.component.html',
  styleUrls: ['./m70-order.component.css']
})
export class M70OrderComponent implements OnInit {

  isMedium = false;
  isSmall = false;
  isBig = false;
    
  smallScreenBreakpoints = "(max-width: 549.98px)";
  mediumScreenBreakpoints = "(min-width: 550px) and (max-width: 749.98px)";

  constructor(private responsive: BreakpointObserver) {}

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
}