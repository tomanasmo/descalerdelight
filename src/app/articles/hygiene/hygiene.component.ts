import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-hygiene",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./hygiene.component.html",
  styleUrls: ["./hygiene.component.css"]
})
export class HygieneComponent {
  title = "Hvordan avkalking unngår bakterier og hygieniske problemer";
}
