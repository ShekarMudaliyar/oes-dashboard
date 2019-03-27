import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

class Exams {
  id: number;
  title: string;
  date: string;
}
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  exam: Exams[];
  constructor(private router: Router) {
    this.exam = [
      {
        id: 1,
        title: "first exam",
        date: "12-3-12"
      },
      {
        id: 2,
        title: "second exam",
        date: "23-3-43"
      }
    ];
  }

  ngOnInit() {}
  clicked(item) {
    console.log(item);
    this.router.navigate(["../examdetail"]);
  }
  btnclick() {
    this.router.navigate(["examdetail"]);
  }
}
