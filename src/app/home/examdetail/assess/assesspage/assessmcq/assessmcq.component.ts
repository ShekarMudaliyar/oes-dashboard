import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { DataserviceService } from "src/app/services/dataservice.service";
import { AlertsService } from "angular-alert-module";

@Component({
  selector: "app-assessmcq",
  templateUrl: "./assessmcq.component.html",
  styleUrls: ["./assessmcq.component.scss"]
})
export class AssessmcqComponent implements OnInit {
  mcq;
  studid;
  examid;
  userid;
  constructor(
    private local: LocalStorage,
    private alert: AlertsService,
    private data: DataserviceService
  ) {
    this.local.getItem("ans").subscribe(ans => {
      let temp = JSON.parse(ans);
      // console.log(temp[0].fib);
      this.mcq = temp[0].mcq;
      console.log(this.mcq);
      this.studid = temp[0].studentid;
    });
    this.local.getItem("user").subscribe(user => {
      this.userid = user._id;
      this.local.getItem("examid").subscribe(examid => {
        this.examid = examid;
      });
    });
    this.alert.setDefaults("timeout", 1.0);
  }

  ngOnInit() {}
  submitmcq(event, item) {
    event.preventDefault();
    console.log(item);
    let marks = event.target.querySelector("#marks").value;
    console.log(marks);
    if (parseInt(item.marks) < marks) {
      this.alert.setMessage("Marks are more than expected", "error");
      this.alert.setDefaults("timeout", 1.0);
    } else if (!marks) {
      this.alert.setMessage("Marks are needed atleast 0", "error");
    } else if (item.marks >= marks) {
      this.data
        .mcqAssess(
          this.userid,
          this.examid,
          this.studid,
          item.id,
          item.question,
          item.marks,
          marks
        )
        .subscribe(call => {
          let temp = JSON.parse(call);
          if (temp.n == 1) {
            this.alert.setMessage("Done", "success");
          } else {
            this.alert.setMessage("Not Done", "error");
          }
        });
    }
  }
  autoAssess() {
    if (this.mcq) {
      this.data
        .accesstest(this.userid, this.examid, this.studid)
        .subscribe(test => {
          console.log(test);
          let temp = JSON.parse(test);
          if (temp.n == 1) {
            this.alert.setMessage("Done", "success");
          } else {
            this.alert.setMessage("Not Done", "error");
          }
        });
    } else {
      this.alert.setMessage("No Answers", "error");
    }
  }
}
