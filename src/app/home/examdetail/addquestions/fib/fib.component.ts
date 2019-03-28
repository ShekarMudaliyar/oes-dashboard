import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fib",
  templateUrl: "./fib.component.html",
  styleUrls: ["./fib.component.scss"]
})
export class FibComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("fib");
  }
}
