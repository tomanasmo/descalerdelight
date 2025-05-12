import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-efficiency",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./efficiency.component.html",
  styleUrls: ["./efficiency.component.css"]
})
export class EfficiencyComponent {
  title = "Hvordan avkalking øker effektiviteten og sparer energi";
}
