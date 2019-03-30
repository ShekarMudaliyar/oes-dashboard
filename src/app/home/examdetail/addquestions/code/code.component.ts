import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { DataserviceService } from "src/app/services/dataservice.service";

@Component({
  selector: "app-code",
  templateUrl: "./code.component.html",
  styleUrls: ["./code.component.scss"]
})
export class CodeComponent implements OnInit {
  codes;
  userid;
  examid;
  constructor(private local: LocalStorage, private data: DataserviceService) {
    this.local.getItem("user").subscribe(user => {
      this.userid = user._id;
      this.local.getItem("examid").subscribe(examid => {
        this.examid = examid;
        this.data.getQues(this.userid, this.examid).subscribe(date => {
          let temp = JSON.parse(date);
          console.log(temp);
          this.codes = temp.code;
        });
      });
    });
  }

  ngOnInit() {}
  addCode(event) {
    event.preventDefault();
    let ques = event.target.querySelector("#question").value;
    this.data.addCode(ques, this.userid, this.examid).subscribe(data => {
      console.log(data);
      window.location.reload();
    });
  }
}
