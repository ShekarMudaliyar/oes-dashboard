import { Component, OnInit } from "@angular/core";
import { FIB } from "src/app/models/fib.model";

@Component({
  selector: "app-fib",
  templateUrl: "./fib.component.html",
  styleUrls: ["./fib.component.scss"]
})
export class FibComponent implements OnInit {
  fibs: FIB[] = [
    {
      id: 1,
      question: "this is __ question 1",
      answer: "answer"
    },
    {
      id: 2,
      question: "this is __ question 2",
      answer: "answer"
    }
  ];
  constructor() {}

  ngOnInit() {}
  addFib(event) {}
}
