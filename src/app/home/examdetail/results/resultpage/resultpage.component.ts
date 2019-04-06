import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { DataserviceService } from "src/app/services/dataservice.service";

@Component({
  selector: "app-resultpage",
  templateUrl: "./resultpage.component.html",
  styleUrls: ["./resultpage.component.scss"]
})
export class ResultpageComponent implements OnInit {
  stud;
  userid;
  examid;
  isLoading = true;
  isData = true;
  result;
  constructor(
    private router: Router,
    private data: DataserviceService,
    private local: LocalStorage
  ) {
    this.stud = this.router.getCurrentNavigation().extras.state.data;
    console.log(this.stud);
    this.local.getItem("user").subscribe(user => {
      this.userid = user._id;
      this.local.getItem("examid").subscribe(examid => {
        this.examid = examid;
        this.data
          .results(this.userid, this.examid, this.stud.id)
          .subscribe(data => {
            if (data == "no data") {
              this.isData = false;
              this.isLoading = false;
            } else {
              this.isLoading = false;
              this.result = JSON.parse(data);
            }
            console.log(data);
          });
      });
    });
  }
  backBtn() {
    this.router.navigate(["results"]);
  }
  ngOnInit() {}
}
