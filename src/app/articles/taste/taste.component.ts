import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-taste",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./taste.component.html",
  styleUrls: ["./taste.component.css"]
})
export class TasteComponent {
  title = "Hvordan avkalking bevarer den beste kaffesmaken";
}
