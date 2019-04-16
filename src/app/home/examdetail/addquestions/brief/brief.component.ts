import { Component, OnInit } from "@angular/core";
import { Brief } from "src/app/models/brief.model";
import { DataserviceService } from "src/app/services/dataservice.service";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { AlertsService } from "angular-alert-module";

@Component({
  selector: "app-brief",
  templateUrl: "./brief.component.html",
  styleUrls: ["./brief.component.scss"]
})
export class BriefComponent implements OnInit {
  isLoading = true;
  briefs;
  userid;
  examid;
  constructor(
    private local: LocalStorage,
    private alert: AlertsService,
    private data: DataserviceService
  ) {
    this.local.getItem("user").subscribe(user => {
      this.userid = user._id;
      this.local.getItem("examid").subscribe(examid => {
        this.examid = examid;
        this.data.getQues(this.userid, this.examid).subscribe(date => {
          let temp = JSON.parse(date);
          console.log(temp);
          this.isLoading = false;
          this.briefs = temp.brief;
        });
      });
    });
    this.alert.setDefaults("timeout", 1.0);
  }

  ngOnInit() {}
  removeQues(i) {
    console.log(i);
  }
  addBrief(event) {
    event.preventDefault();
    let ques = event.target.querySelector("#question").value;
    let ans = event.target.querySelector("#answer").value;
    let marks = event.target.querySelector("#marks").value;
    if (ques != "" && ans != "" && marks != "") {
      this.alert.setMessage("Please Wait", "success");

      this.data
        .addBrief(ques, ans, this.userid, this.examid, marks)
        .subscribe(data => {
          console.log(data);
          window.location.reload();
        });
    } else {
      this.alert.setMessage("Fields Empty", "error");
    }
  }
}
