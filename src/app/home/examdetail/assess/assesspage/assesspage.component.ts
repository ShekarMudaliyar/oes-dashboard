import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-assesspage",
  templateUrl: "./assesspage.component.html",
  styleUrls: ["./assesspage.component.scss"]
})
export class AssesspageComponent implements OnInit {
  navlinks = [
    { path: "assessfib", label: "fib" },
    { path: "assessmcq", label: "mcq" },
    { path: "assessbrief", label: "brief" },
    { path: "assesscode", label: "code" }
  ];
  constructor(private router: Router) {}

  ngOnInit() {}
  backBtn() {
    this.router.navigate(["examdetail"]);
  }
}
