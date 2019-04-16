import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { DataserviceService } from "src/app/services/dataservice.service";
import { AlertsService } from "angular-alert-module";

@Component({
  selector: "app-code",
  templateUrl: "./code.component.html",
  styleUrls: ["./code.component.scss"]
})
export class CodeComponent implements OnInit {
  codes;
  userid;
  examid;
  isLoading = true;
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
          this.codes = temp.code;
        });
      });
    });
    this.alert.setDefaults("timeout", 1.0);
  }

  ngOnInit() {}
  addCode(event) {
    event.preventDefault();
    let ques = event.target.querySelector("#question").value;
    let marks = event.target.querySelector("#marks").value;
    if (ques != "" && marks != "") {
      this.alert.setMessage("Please Wait", "success");

      this.data
        .addCode(ques, this.userid, this.examid, marks)
        .subscribe(data => {
          console.log(data);
          window.location.reload();
        });
    } else {
      this.alert.setMessage("Fields Empty", "error");
    }
  }
}
