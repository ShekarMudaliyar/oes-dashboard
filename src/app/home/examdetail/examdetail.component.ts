import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-examdetail",
  templateUrl: "./examdetail.component.html",
  styleUrls: ["./examdetail.component.scss"]
})
export class ExamdetailComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  addDate() {
    this.router.navigate(["/adddate"]);
  }
  addTime() {
    this.router.navigate(["/addtime"]);
  }
  addStud() {
    this.router.navigate(["/addstudents"]);
  }
  addQues() {
    this.router.navigate(["/addquestions"]);
  }
  assess() {
    this.router.navigate(["/assess"]);
  }
  results() {
    this.router.navigate(["/results"]);
  }
  backHome() {
    this.router.navigate(["home"]);
  }
}
