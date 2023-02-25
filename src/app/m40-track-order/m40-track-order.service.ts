import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class M40TrackOrderService {

  constructor(private http: HttpClient) { }

  /*getCountries(){
    return this.http.get('https://restcountries.com/v3.1/all'); 
  }*/

  getCJTrackingNumbers(){
    return this.http.get('https://developers.cjdropshipping.com/api2.0/v1/logistic/getTrackInfo?trackNumber=EQKPT8576968226YQ'); 
  }

  findMyOrder(orderNumber: string){    
    return this.http.get('https://developers.cjdropshipping.com/api2.0/v1/logistic/getTrackInfo?trackNumber=' + orderNumber); 
  }
}

export interface TrackingNumber {
  trackingNumber: string;
  trackingFrom:string;
  trackingTo:string;
  deliveryDay:string;
  deliveryTime:string;
  trackingStatus:string;
}
