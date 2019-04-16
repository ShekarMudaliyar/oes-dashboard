import { Component, OnInit } from "@angular/core";
import { Student } from "src/app/models/student.model";
import { Router } from "@angular/router";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { DataserviceService } from "src/app/services/dataservice.service";
import { AlertsService } from "angular-alert-module";

@Component({
  selector: "app-addstudents",
  templateUrl: "./addstudents.component.html",
  styleUrls: ["./addstudents.component.scss"]
})
export class AddstudentsComponent implements OnInit {
  students;
  userid;
  examid;
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
        this.data.getStud(this.userid, this.examid).subscribe(date => {
          let temp = JSON.parse(date);
          this.isLoading = false;

          this.students = temp.students;
        });
      });
    });
    this.alert.setDefaults("timeout", 1.0);
  }
  backBtn() {
    this.router.navigate(["examdetail"]);
  }
  ngOnInit() {}
  addStud(event) {
    event.preventDefault();
    let roll = event.target.querySelector("#rollno").value;
    let name = event.target.querySelector("#name").value;
    let email = event.target.querySelector("#email").value;
    let pass = event.target.querySelector("#pass").value;
    if (roll != "" && name != "" && email != "" && pass != "") {
      this.alert.setMessage("Please Wait", "success");

      this.data
        .addStud(roll, name, email, pass, this.userid, this.examid)
        .subscribe(stud => {
          console.log(stud);
          window.location.reload();
        });
    } else {
      this.alert.setMessage("Fields Empty", "error");
    }
  }
}
