import { Component, OnInit } from "@angular/core";
import { MCQ } from "src/app/models/mcq.model";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { DataserviceService } from "src/app/services/dataservice.service";
import { AlertsService } from "angular-alert-module";

@Component({
  selector: "app-mcq",
  templateUrl: "./mcq.component.html",
  styleUrls: ["./mcq.component.scss"]
})
export class McqComponent implements OnInit {
  mcqs;
  isLoading = true;
  userid;
  examid;
  constructor(
    private local: LocalStorage,
    private data: DataserviceService,
    private alert: AlertsService
  ) {
    this.local.getItem("user").subscribe(user => {
      this.userid = user._id;
      this.local.getItem("examid").subscribe(examid => {
        this.examid = examid;
        this.data.getQues(this.userid, this.examid).subscribe(date => {
          let temp = JSON.parse(date);
          console.log(temp);
          this.isLoading = false;
          this.mcqs = temp.mcq;
        });
      });
    });
    this.alert.setDefaults("timeout", 1.0);
  }

  ngOnInit() {}
  addMcq(event) {
    event.preventDefault();
    let ques = event.target.querySelector("#question").value;
    let op1 = event.target.querySelector("#op1").value;
    let op2 = event.target.querySelector("#op2").value;
    let op3 = event.target.querySelector("#op3").value;
    let op4 = event.target.querySelector("#op4").value;
    let ans = event.target.querySelector("#answer").value;
    let marks = event.target.querySelector("#marks").value;
    if (op1 == ans || op2 == ans || op3 == ans || op4 == ans) {
      console.log("match");
      this.data
        .addMcq(ques, op1, op2, op3, op4, this.userid, this.examid, marks, ans)
        .subscribe(data => {
          console.log(data);
          window.location.reload();
        });
    } else {
      console.log("no match");
      this.alert.setMessage("No matching answer", "error");
    }
  }
  removeQues(mcq) {
    console.log(mcq);
    this.data.remMcq(this.userid, this.examid, mcq.id).subscribe(data => {
      // console.log(data);
      window.location.reload();
    });
  }
}
