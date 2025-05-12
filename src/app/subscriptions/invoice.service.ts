import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'https://django.agn3s.com/api/invoices/';
  private apiKey = '9b7b4642-5f56-47b1-b750-2400b91984e5';  // Erstatt med nøkkelen fra Django

  constructor(private http: HttpClient) {}

  createInvoice(invoice: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-Key': this.apiKey  // Legg til API-nøkkel i header
    });
    //console.log('!!!!!!!!!!!!!!!!!Headers sent:', headers);  // Legg til for debugging
    //console.log('!!!!!!!!!!!!!!!!invoice sent:', invoice);  // Legg til for debugging
    return this.http.post(this.apiUrl, invoice, { headers });
  }

  getInvoices(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}