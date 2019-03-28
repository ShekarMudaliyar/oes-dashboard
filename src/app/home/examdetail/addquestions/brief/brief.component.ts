import { Component, OnInit } from "@angular/core";
import { Brief } from "src/app/models/brief.model";

@Component({
  selector: "app-brief",
  templateUrl: "./brief.component.html",
  styleUrls: ["./brief.component.scss"]
})
export class BriefComponent implements OnInit {
  briefs: Brief[] = [
    { id: 1, question: "question", answer: "answer" },
    { id: 2, question: "question 2", answer: "answer" }
  ];
  constructor() {}

  ngOnInit() {}
  removeQues(i) {
    console.log(i);
  }
}
