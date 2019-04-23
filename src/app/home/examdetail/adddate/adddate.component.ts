import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { DataserviceService } from "src/app/services/dataservice.service";
import { AlertsService } from "angular-alert-module";
import { MinLengthValidator } from "@angular/forms";
@Component({
  selector: "app-adddate",
  templateUrl: "./adddate.component.html",
  styleUrls: ["./adddate.component.scss"]
})
export class AdddateComponent implements OnInit {
  userid;
  examid;
  dates;
  isLoading = true;
  constructor(
    private router: Router,
    private local: LocalStorage,
    private alert: AlertsService,
    private data: DataserviceService
  ) {
    this.local.getItem("user").subscribe(user => {
      this.userid = user._id;
      this.local.getItem("examid").subscribe(examid => {
        this.examid = examid;
        this.data.getDate(this.userid, this.examid).subscribe(date => {
          let temp = JSON.parse(date);
          this.isLoading = false;
          this.dates = temp.dates;
        });
      });
    });
    this.alert.setDefaults("timeout", 1.0);
  }
  // dates: Date[] = [
  //   { id: 1, date: "12-4-23", timefrom: "23:23", timeto: "6-54" },
  //   { id: 2, date: "14-3-34", timefrom: "3:23", timeto: "23:34" }
  // ];
  datetime: Date = new Date(Date.now() - 864e5);

  min: Date = new Date();

  ngOnInit() {}

  backBut() {
    this.router.navigate(["examdetail"]);
  }

  addDate(event) {
    event.preventDefault();
    let date = event.target.querySelector("#date").value;
    let timefrom = event.target.querySelector("#timefrom").value;
    let timeto = event.target.querySelector("#timeto").value;

    function formatDate(date) {
      var temp = date.split("/");

      return `${temp[1]}-${temp[0]}-${temp[2]}`;
    }

    const convertTime12to24 = time12h => {
      const [time, modifier] = time12h.split(" ");

      let [hours, minutes] = time.split(":");

      if (hours === "12") {
        hours = "00";
      }

      if (modifier === "PM") {
        hours = parseInt(hours, 10) + 12;
      }

      return `${hours}:${minutes}`;
    };
    // console.log(
    //   formatDate(date),
    //   convertTime12to24(timefrom),
    //   convertTime12to24(timeto)
    // );
    if (date != "" && timefrom != "" && timeto != "") {
      this.alert.setMessage("Please Wait", "success");
      this.data
        .addDate(
          formatDate(date),
          convertTime12to24(timefrom),
          convertTime12to24(timeto),
          this.userid,
          this.examid
        )
        .subscribe(data => {
          console.log(data);
          window.location.reload();
        });
    } else {
      this.alert.setMessage("Fields Empty", "error");
    }
  }
}
