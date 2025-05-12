import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { faSquareCheck, faCheck } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import RevolutCheckout from '@revolut/checkout';
import { AnasmoGlobals } from 'src/anasmo/global';

@Component({
  selector: 'app-m70-order',
  templateUrl: './m70-order.component.html',
  styleUrls: ['./m70-order.component.css'],
})
export class M70OrderComponent implements OnInit, AfterViewInit {
  step: 1 | 2 | 3 = 1;
  orderId: string | null = null;
  publicId: string | null = null;
  currency: string = 'NOK';
  showOrderDetails: boolean = false;

  // Eksponer AnasmoGlobals for malen
  AnasmoGlobals = AnasmoGlobals;

  // Felter for Steg 1
  customerEmail: string = '';
  zipCode: string = '';

  // Felter for Steg 2
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  city: string = '';
  phoneNumber: string = '';

  // Felt for Steg 3
  cardholderName: string = '';
  cardErrorMessage: string | null = null;

  @ViewChild('cardField', { static: false }) cardField!: ElementRef<HTMLDivElement>;

  isMedium = false;
  isSmall = false;
  isBig = false;

  smallScreenBreakpoints = '(max-width: 549.98px)';
  mediumScreenBreakpoints = '(min-width: 550px) and (max-width: 749.98px)';

  faSquareCheck = faSquareCheck;
  faCheck = faCheck;

  constructor(
    private responsive: BreakpointObserver,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  // Vis pris i kroner (konverter fra øre til kroner)
  getPriceInNOK(): string {
    return (AnasmoGlobals.CURRENT_PRICE / 100).toFixed(2); // F.eks. 75000 -> "750.00"
  }

  ngOnInit(): void {
    console.log('ngOnInit: Initializing component, version 2025-05-23');
    console.log('AnasmoGlobals.CURRENT_PRICE (øre):', AnasmoGlobals.CURRENT_PRICE);
    this.responsive
      .observe([this.smallScreenBreakpoints, this.mediumScreenBreakpoints])
      .subscribe((result) => {
        if (this.responsive.isMatched(this.mediumScreenBreakpoints)) {
          this.isMedium = true;
          this.isSmall = false;
          this.isBig = false;
        } else if (this.responsive.isMatched(this.smallScreenBreakpoints)) {
          this.isSmall = true;
          this.isMedium = false;
          this.isBig = false;
        } else {
          this.isMedium = false;
          this.isSmall = false;
          this.isBig = true;
        }
      });
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Card field element:', this.cardField?.nativeElement);
  }

  // Legg til i m70-order.component.ts
  formatPrice(price: number | string): string {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    return numPrice.toFixed(2).replace('.', ',');
  }

  proceedToNextStep(): void {
    if (this.step === 1 && this.isStep1Valid()) {
      this.step = 2;
    } else if (this.step === 2 && this.isStep2Valid()) {
      this.step = 3;
      this.createPayment();
    }
  }

  isStep1Valid(): boolean {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.customerEmail);
    const zipCodeValid = this.zipCode.trim().length >= 4;
    return emailValid && zipCodeValid;
  }

  isStep2Valid(): boolean {
    return (
      this.firstName.trim().length > 0 &&
      this.lastName.trim().length > 0 &&
      this.address.trim().length > 0 &&
      this.city.trim().length > 0 &&
      this.phoneNumber.trim().length >= 8
    );
  }

  isFormValid(): boolean {
    const step1Valid = this.isStep1Valid();
    const step2Valid = step1Valid && this.isStep2Valid();
    const step3Valid = step2Valid && this.publicId !== null && this.cardholderName.trim().split(/\s+/).length >= 2;
    return this.step === 3 && step3Valid;
  }

  createPayment(): void {
    console.log('createPayment: Preparing payload');
    const payload = {
      amount: AnasmoGlobals.CURRENT_PRICE / 100, // Konverter øre til kroner (f.eks. 75000 -> 750)
      currency: this.currency,
      customer_email: this.customerEmail,
      first_name: this.firstName,
      last_name: this.lastName,
      address: this.address,
      city: this.city,
      zip_code: this.zipCode,
      phone_number: this.phoneNumber,
    };
    console.log('createPayment: Sending payload:', payload);

    this.http
      .post<any>('http://10.10.10.105:8000/api/revolut/create-payment/', payload)
      .subscribe({
        next: (response) => {
          console.log('createPayment: Received server response:', response);
          this.orderId = response.order_id;
          this.publicId = response.public_id;
          console.log('createPayment: Public ID:', this.publicId);
          if (!this.publicId) {
            console.error('createPayment: No public_id received from server');
            this.cardErrorMessage = 'Kunde ikke laste betaling: Mangler public_id';
            return;
          }
          this.cdr.detectChanges();
          setTimeout(() => {
            console.log('createPayment: Calling initRevolutCheckout');
            this.initRevolutCheckout();
          }, 0);
        },
        error: (error) => {
          console.error('createPayment: Error creating payment:', error);
          const errorMessage = error.error?.error || 'Kunde ikke opprette betaling.';
          this.cardErrorMessage = errorMessage;
          this.cdr.detectChanges();
        },
      });
  }

  async initRevolutCheckout(): Promise<void> {
    console.log('initRevolutCheckout: Starting with publicId:', this.publicId);
    if (!this.publicId) {
      console.error('initRevolutCheckout: Public ID is missing');
      this.cardErrorMessage = 'Kunde ikke laste betalingswidget: Mangler public_id';
      this.cdr.detectChanges();
      return;
    }
    if (!this.cardField?.nativeElement) {
      console.error('initRevolutCheckout: Card field element is not available');
      this.cardErrorMessage = 'Kunde ikke laste betalingswidget: Kortfelt mangler';
      this.cdr.detectChanges();
      return;
    }

    try {
      const revolutCheckout = await RevolutCheckout(this.publicId, 'sandbox');
      revolutCheckout.setDefaultLocale('auto');

      const card = revolutCheckout.createCardField({
        target: this.cardField.nativeElement,
        email: this.customerEmail,
        onSuccess: () => {
          console.log('initRevolutCheckout: Payment successful');
          this.cardErrorMessage = null;
          alert('Betaling vellykket!');
          this.cdr.detectChanges();
        },
        onError: (error: unknown) => {
          const errorMessage = error instanceof Error ? error.message : String(error);
          console.error('initRevolutCheckout: Payment failed:', errorMessage);
          this.cardErrorMessage = `Betaling feilet: ${errorMessage}. Prøv igjen.`;
          this.cdr.detectChanges();
        },
      });

      this.submitCard = () => {
        console.log('submitCard: Submitting card with email:', this.customerEmail, 'and name:', this.cardholderName);
        this.cardErrorMessage = null;

        if (!this.cardholderName) {
          console.error('submitCard: Cardholder name is missing');
          this.cardErrorMessage = 'Vennligst skriv inn kortinnehavernavn.';
          this.cdr.detectChanges();
          return;
        }
        const nameWords = this.cardholderName.trim().split(/\s+/);
        if (nameWords.length < 2) {
          console.error('submitCard: Cardholder name must be at least two words');
          this.cardErrorMessage = 'Kortinnehavernavnet må inneholde minst to ord (f.eks. Fornavn Etternavn).';
          this.cdr.detectChanges();
          return;
        }

        card.submit({
          name: this.cardholderName,
          email: this.customerEmail,
        });

        setTimeout(() => {
          if (!this.cardErrorMessage && this.step === 3) {
            console.error('submitCard: No response from Revolut Checkout, assuming empty card info');
            this.cardErrorMessage = 'Vennligst fyll ut kortinformasjon (kortnummer, utløpsdato, CVC).';
            this.cdr.detectChanges();
          }
        }, 1000);
      };
    } catch (error) {
      console.error('initRevolutCheckout: Error loading Revolut Checkout:', error);
      this.cardErrorMessage = 'Kunde ikke laste betalingswidget: Feil ved initialisering.';
      this.cdr.detectChanges();
    }
  }

  toggleOrderDetails(): void {
    this.showOrderDetails = !this.showOrderDetails;
    this.cdr.detectChanges();
  }

  submitCard: (() => void) | null = null;
}