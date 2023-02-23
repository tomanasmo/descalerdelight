import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() language: string = "NO";
  text: any;
  textNo = [ "SPOR BESTILLING", "KONTAKT OSS", "BESTILL NÅ!" ];
  textEn = [ "TRACK ORDER", "CONTACT", "ORDER NOW!" ];
  isMedium = false;
  isSmall = false;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {

    if (this.language == "EN") {
      this.text = this.textEn;
    } else {
      this.text = this.textNo;
    }

    this.responsive.observe(
      ['(max-width: 750px)', '(min-width: 750px)', '(max-width: 550px)', '(min-width: 550px)']
      ).subscribe(result => {        

        if (this.responsive.isMatched("(max-width: 750px)")) {
          console.log("Fra stor til mindre");   
          this.isMedium = true;
        }

        if (this.responsive.isMatched("(min-width: 750px)")) {
          console.log("Fra mindre til større");
          this.isMedium = false;
        }

        if (this.responsive.isMatched("(max-width: 550px)")) {
          console.log("Under 550px");
          this.isSmall = true;          
        }

        if (this.responsive.isMatched("(min-width: 550px)")) {
          console.log("Over 550px");
          this.isSmall = false;          
        }

    });

  }
}
