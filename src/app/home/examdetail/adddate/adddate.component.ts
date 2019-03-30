import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Date } from "../../../models/date.model";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { DataserviceService } from "src/app/services/dataservice.service";
@Component({
  selector: "app-adddate",
  templateUrl: "./adddate.component.html",
  styleUrls: ["./adddate.component.scss"]
})
export class AdddateComponent implements OnInit {
  userid;
  examid;
  dates;
  constructor(
    private router: Router,
    private local: LocalStorage,
    private data: DataserviceService
  ) {
    this.local.getItem("user").subscribe(user => {
      this.userid = user._id;
      this.local.getItem("examid").subscribe(examid => {
        this.examid = examid;
        this.data.getDate(this.userid, this.examid).subscribe(date => {
          let temp = JSON.parse(date);
          this.dates = temp.dates;
        });
      });
    });
  }
  // dates: Date[] = [
  //   { id: 1, date: "12-4-23", timefrom: "23:23", timeto: "6-54" },
  //   { id: 2, date: "14-3-34", timefrom: "3:23", timeto: "23:34" }
  // ];
  ngOnInit() {}

  backBut() {
    this.router.navigate(["examdetail"]);
  }
  addDate(event) {
    event.preventDefault();
    let date = event.target.querySelector("#date").value;
    let timefrom = event.target.querySelector("#timefrom").value;
    let timeto = event.target.querySelector("#timeto").value;

    this.data
      .addDate(date, timefrom, timeto, this.userid, this.examid)
      .subscribe(data => {
        console.log(data);
        window.location.reload();
      });
  }
}
