import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {

  constructor(public router: Router) {}

  navigateToAbout() {
    this.router.navigate(["/about"]);
  }

  navigateToJoin() {
    this.router.navigate(["/join"]);
  }
}
