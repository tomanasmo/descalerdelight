// klarna.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnasmoGlobals } from 'src/anasmo/global';

@Injectable({
  providedIn: 'root'
})
export class KlarnaService {
  private apiUrl = 'https://django.agn3s.com/api/create-klarna-order/';
  private apiKey = '9b7b4642-5f56-47b1-b750-2400b91984e5';  // Erstatt med nøkkelen fra Django
  //private klarnaClientId = 'klarna_live_client_V3hIeiNmY1pHSjFqQ3RDdGJkempoMSp5NktzNCEtbCosODljNDM2MGMtMzBkZC00ZjhkLWE5ZTQtMWUzNzg5MjMzNzIzLDEsbTFpa0pxei9WcDBHeWlsSWNMYkJzcUR1TEFTSTlmN1BKRHhUcUVvcVRzdz0';

  constructor(private http: HttpClient) {}

  createOrder(): Observable<any> {

    const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'X-API-Key': this.apiKey,  // Legg til API-nøkkel i header
          //'Klarna-Client-Id': this.klarnaClientId
        });

        const orderData = {
            purchase_country: 'NO',
            purchase_currency: 'NOK',
            locale: 'nb-NO',
            order_amount: AnasmoGlobals.CURRENT_PRICE, // Totalbeløp
            order_tax_amount: 0,
            order_lines: [
              {
                type: 'physical',
                name: 'Descaler Delight',
                quantity: 1,
                unit_price: AnasmoGlobals.CURRENT_PRICE, // Pris for planen.
                tax_rate: 0,
                total_amount: AnasmoGlobals.CURRENT_PRICE,
                total_tax_amount: 0
              },
              {
                  type: 'shipping_fee', // Fraktlinje
                  name: 'Gratis frakt', // Beskrivelse
                  quantity: 1,
                  unit_price: 0, // Gratis
                  tax_rate: 0,
                  total_amount: 0, // Gratis
                  total_tax_amount: 0
              }
            ],
            customer: 
            {
              //gender: 'male',
              date_of_birth: '1970-08-01'
            },
            merchant_urls: {
              terms: 'https://descalerdelight.com',
              checkout: 'https://descalerdelight.com',
              confirmation: 'https://django.agn3s.com/api/confirmation/',
              notification: 'https://descalerdelight.com',
              push: 'https://descalerdelight.com',
            }
          };

    return this.http.post(this.apiUrl, orderData, { headers });
    }
}