import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Student } from "src/app/models/student.model";
import { DataserviceService } from "src/app/services/dataservice.service";
import { LocalStorage } from "@ngx-pwa/local-storage";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
  students;
  userid;
  examid;
  isLoading = true;
  constructor(
    private router: Router,
    private data: DataserviceService,
    private local: LocalStorage
  ) {
    this.local.getItem("user").subscribe(user => {
      this.userid = user._id;
      this.local.getItem("examid").subscribe(examid => {
        this.examid = examid;
        this.data.getStud(this.userid, this.examid).subscribe(date => {
          let temp = JSON.parse(date);
          this.isLoading = false;
          this.students = temp.students;
        });
      });
    });
  }
  backBtn() {
    this.router.navigate(["examdetail"]);
  }
  ngOnInit() {}
  getResult(stud) {
    console.log(stud);
    this.router.navigate(["resultpage"], { state: { data: stud } });
  }
}
