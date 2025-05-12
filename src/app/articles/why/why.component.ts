import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-why",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./why.component.html",
  styleUrls: ["./why.component.css"]
})
export class WhyComponent {
  title = "Fordelene med regelmessig avkalking av kaffemaskinen";
}
