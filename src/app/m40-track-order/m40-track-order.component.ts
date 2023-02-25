import { Component, Input, OnInit } from '@angular/core';
import { M40TrackOrderService } from './m40-track-order.service';
import * as _ from 'lodash';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AnasmoGlobals } from 'src/anasmo/global';

@Component({
  selector: 'app-m40-track-order',
  templateUrl: './m40-track-order.component.html',
  styleUrls: ['./m40-track-order.component.css']
})
export class M40TrackOrderComponent implements OnInit {

  constructor(private responsive: BreakpointObserver, private api:M40TrackOrderService) {}

  cjTrackingData: any;
  routes!: Routes[];

  trackingNumber: string = "EQKPT8576968226YQ";
  hasRoutes: boolean = false;

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

  findMyOrder()
  {
    console.log("Searching for tracking number: " + this.trackingNumber);

    //this.api.getCJTrackingNumbers().subscribe((data) =>
    this.api.findMyOrder(this.trackingNumber).subscribe((data) =>
    {
      this.cjTrackingData = data;
      this.routes = this.cjTrackingData?.data[0]?.routes;

      // Use lodash to check if routes have any data.
      if (!_.values(this.routes).some(x => x !== undefined)) this.hasRoutes = false;
      else this.hasRoutes = true;
    });
  }

}

export interface Routes
{
  acceptAddress: string;
  acceptTime: string;
  remark: string;
}