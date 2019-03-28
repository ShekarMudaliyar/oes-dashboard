import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-addquestions",
  templateUrl: "./addquestions.component.html",
  styleUrls: ["./addquestions.component.scss"]
})
export class AddquestionsComponent implements OnInit {
  constructor(private router: Router) {}
  navlinks = [
    { path: "fib", label: "fib" },
    { path: "mcq", label: "mcq" },
    { path: "brief", label: "brief" },
    { path: "code", label: "code" }
  ];
  ngOnInit() {}
  backBtn() {
    this.router.navigate(["examdetail"]);
  }
}
