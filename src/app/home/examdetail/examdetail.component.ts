import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorage } from "@ngx-pwa/local-storage";

@Component({
  selector: "app-examdetail",
  templateUrl: "./examdetail.component.html",
  styleUrls: ["./examdetail.component.scss"]
})
export class ExamdetailComponent implements OnInit {
  examid;
  constructor(private router: Router, private local: LocalStorage) {
    this.local.getItem("examid").subscribe(data => {
      this.examid = data;
      console.log(data);
    });
  }

  ngOnInit() {}
  addDate() {
    this.router.navigate(["/adddate"]);
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
