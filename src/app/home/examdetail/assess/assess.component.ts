import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Student } from "src/app/models/student.model";
import { DataserviceService } from "src/app/services/dataservice.service";
import { LocalStorage } from "@ngx-pwa/local-storage";

@Component({
  selector: "app-assess",
  templateUrl: "./assess.component.html",
  styleUrls: ["./assess.component.scss"]
})
export class AssessComponent implements OnInit {
  students;
  userid;
  examid;
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
          this.students = temp.students;
        });
      });
    });
  }

  ngOnInit() {}
  backBtn() {
    this.router.navigate(["examdetail"]);
  }
  getAssess(stud) {
    console.log(stud);
    this.router.navigate(["assesspage"], { state: { data: stud } });
  }
}
