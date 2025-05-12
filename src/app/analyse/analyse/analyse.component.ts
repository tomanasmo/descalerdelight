import { Component, ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgForm } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AnalyseService } from './analyse.service';


@Component({
  selector: "app-analyse",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: "./analyse.component.html",
  styleUrls: ["./analyse.component.css"]
})
export class AnalyseComponent {
  user = {
    email: '',
    vannverk: '',
    kaffemaskin: '',
    kopper: ''
  };
  message: string = '';

  title = "Få tilsendt gratis analyse av din kaffemaskin!";
  @ViewChild('coffeeForm') coffeeForm!: NgForm; // Deklarerer coffeeForm med ViewChild
  successMessage: string | null = null; // Variabel for suksessmelding

  constructor(private analyseService: AnalyseService) {}

  onSubmit = () => { // Pilfunksjon for å beholde "this"
    //console.log('User objekt:', this.user);
    //console.log('userService:', this.analyseService);
    const submitUser = {
      ...this.user,
      kopper: this.user.kopper !== '' ? Number(this.user.kopper) : null // Konverter til tall eller null
    };
    console.log('SubmitUser:', submitUser);
    this.analyseService.createUser(submitUser).subscribe({
      next: (response) => { // Pilfunksjon her også
        //console.log('Respons:', response);
        this.message = 'Bruker opprettet!';
        this.user = { email: '', vannverk: '', kaffemaskin: '', kopper: '' };
      },
      error: (error) => { // Pilfunksjon her også
        console.log('Feil:', error);
        this.message = 'Noe gikk galt: ' + error.message;
      }
    });
  }
}
