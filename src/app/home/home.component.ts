import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { DataserviceService } from "../services/dataservice.service";

class Exams {
  id: string;
  exam: string;
}
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  exam;
  user;
  constructor(
    private router: Router,
    private local: LocalStorage,
    private data: DataserviceService
  ) {
    this.local.getItem("user").subscribe(data => {
      this.user = data;
      let userid = data._id;
      console.log(userid);
      this.data.getExams(userid).subscribe(exam => {
        // if (exam != null) {
        let examdata = JSON.parse(exam);
        console.log(examdata.exams);
        this.exam = examdata.exams;
        // }
      });
    });
  }

  ngOnInit() {}
  clicked(item) {
    this.local.setItem("examid", item.id).subscribe(data => {
      this.router.navigate(["../examdetail"]);
    });
  }
  btnclick(event) {
    event.preventDefault();
    this.data
      .setExam(this.user._id, event.target.querySelector("#name").value)
      .subscribe(data => {
        console.log(data);
        window.location.reload();
      });
  }
}
