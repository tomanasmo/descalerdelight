import { Component, ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { InvoiceService } from './invoice.service';


@Component({
  selector: "app-analyse",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: "./subscriptions.component.html",
  styleUrls: ["./subscriptions.component.css"]
})
export class SubscriptionsComponent {
  title = "Velg ditt abonnement for vedlikehold av din kaffemaskin!";
  @ViewChild('coffeeForm') coffeeForm!: NgForm; // Deklarerer coffeeForm med ViewChild
  successMessage: string | null = null; // Variabel for suksessmelding

  isMedium = false;
  isSmall = false;
  isBig = false;

  smallScreenBreakpoints = "(max-width: 549.98px)";
  mediumScreenBreakpoints = "(min-width: 550px) and (max-width: 749.98px)";

  invoice = {
    user: 25,
    //customer_email: '',
    //invoice_number: 2025,
    amount: 1250,
    //due_date: '',
    //created_at: ''
  };  

  constructor(private http: HttpClient, private responsive: BreakpointObserver, private invoiceService: InvoiceService) {}

  onSubmit() {

    // Beregn due_date som dagens dato + 14 dager
    //let today = new Date(); // Dagens dato (20. mars 2025 i dette tilfellet)
    //let dueDate = new Date(today);
    //let created_at = new Date(today);
    //dueDate.setDate(today.getDate() + 14); // Legger til 14 dager
    //created_at.setDate(today.getDate());

    // Sett due_date i invoice-objektet (f.eks. som ISO-streng)
    //his.invoice.due_date = dueDate.toISOString().split('T')[0]; // Formaterer som YYYY-MM-DD
    
    this.invoiceService.createInvoice(this.invoice).subscribe(
      response => {
        console.log('Faktura opprettet og sendt!', response);
      },
      error => {
        console.error('Feil ved opprettelse av faktura', error);
      }
    );
  }
  
    /*onSubmit() {
      const formData = {
        email: this.coffeeForm.value.email,
        waterSource: this.coffeeForm.value.waterSource || '',
        coffeeMachine: this.coffeeForm.value.coffeeMachine || '',
        cupsPerDay: this.coffeeForm.value.cupsPerDay || 0
      };
  
      this.http.post('https://descalerdelight.com/coffee_submit.php', formData).subscribe(
        response => {
          console.log('Suksess:', response);
          // Sjekk om responsen har en suksessmelding
          if (response && (response as any).message === 'Data lagret!') {
            this.successMessage = 'Takk! Din rapport er på vei til innboksen din.';
          }
          this.coffeeForm.reset(); // Nullstiller skjemaet
        },
        error => {
          console.error('Feil:', error);
          this.successMessage = null; // Nullstiller meldingen ved feil
        }
      );
    }*/

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
