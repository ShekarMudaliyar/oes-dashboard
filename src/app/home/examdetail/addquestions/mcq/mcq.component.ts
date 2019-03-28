import { Component, OnInit } from "@angular/core";
import { MCQ } from "src/app/models/mcq.model";

@Component({
  selector: "app-mcq",
  templateUrl: "./mcq.component.html",
  styleUrls: ["./mcq.component.scss"]
})
export class McqComponent implements OnInit {
  mcqs: MCQ[] = [
    {
      id: 1,
      question: "this is question",
      op1: "option 1",
      op2: "option 2",
      op3: "option 3",
      op4: "option 4"
    },
    {
      id: 2,
      question: "this is question 2",
      op1: "option 1",
      op2: "option 2",
      op3: "option 3",
      op4: "option 4"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
