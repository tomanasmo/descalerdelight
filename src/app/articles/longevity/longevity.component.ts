import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-longevity",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./longevity.component.html",
  styleUrls: ["./longevity.component.css"]
})
export class LongevityComponent {
  title = "Hvordan avkalking forlenger levetiden til kaffemaskinen";
}
