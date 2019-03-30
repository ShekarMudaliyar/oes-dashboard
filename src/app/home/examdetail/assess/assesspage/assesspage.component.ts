import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorage } from "@ngx-pwa/local-storage";

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
  data;
  constructor(private router: Router, protected localStorage: LocalStorage) {
    this.data = this.router.getCurrentNavigation().extras.state.data;
    this.localStorage.setItemSubscribe("stud", this.data);
    console.log(this.data);
  }

  ngOnInit() {}
  backBtn() {
    this.router.navigate(["assess"]);
  }
}
