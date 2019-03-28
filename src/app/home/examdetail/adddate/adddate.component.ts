import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Date } from "../../../models/date.model";
@Component({
  selector: "app-adddate",
  templateUrl: "./adddate.component.html",
  styleUrls: ["./adddate.component.scss"]
})
export class AdddateComponent implements OnInit {
  constructor(private router: Router) {}
  dates: Date[] = [
    { id: 1, date: "12-4-23", timefrom: "23:23", timeto: "6-54" },
    { id: 2, date: "14-3-34", timefrom: "3:23", timeto: "23:34" }
  ];
  ngOnInit() {}

  backBut() {
    this.router.navigate(["examdetail"]);
  }
  addDate(event) {
    event.preventDefault();
    let date = event.target.querySelector("#date").value;
    console.log(date);
  }
}
