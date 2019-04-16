import { Component, OnInit } from "@angular/core";
import { FIB } from "src/app/models/fib.model";
import { DataserviceService } from "src/app/services/dataservice.service";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { AlertsService } from "angular-alert-module";

@Component({
  selector: "app-fib",
  templateUrl: "./fib.component.html",
  styleUrls: ["./fib.component.scss"]
})
export class FibComponent implements OnInit {
  fibs;
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
          this.fibs = temp.fib;
        });
      });
    });
    this.alert.setDefaults("timeout", 1.0);
  }

  ngOnInit() {}
  addFib(event) {
    event.preventDefault();
    let ques = event.target.querySelector("#question").value;
    let ans = event.target.querySelector("#answer").value;
    let marks = event.target.querySelector("#marks").value;
    if (ques != "" && ans != "" && marks != "") {
      this.alert.setMessage("Please Wait", "success");

      this.data
        .addFib(ques, ans, this.userid, this.examid, marks)
        .subscribe(data => {
          console.log(data);
          window.location.reload();
        });
    } else {
      this.alert.setMessage("Fields Empty", "error");
    }
  }
}
