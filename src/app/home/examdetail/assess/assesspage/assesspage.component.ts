import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { DataserviceService } from "src/app/services/dataservice.service";

@Component({
  selector: "app-assesspage",
  templateUrl: "./assesspage.component.html",
  styleUrls: ["./assesspage.component.scss"]
})
export class AssesspageComponent implements OnInit {
  navlinks = [
    { path: "assessfib", label: "fib" },
    { path: "assessmcq", label: "mcq" },
    { path: "assessbrief", label: "brief" },
    { path: "assesscode", label: "code" }
  ];
  stud;
  userid;
  examid;
  constructor(
    private router: Router,
    protected local: LocalStorage,
    private data: DataserviceService
  ) {
    this.stud = this.router.getCurrentNavigation().extras.state.data;
    this.local.getItem("user").subscribe(user => {
      this.userid = user._id;
      this.local.getItem("examid").subscribe(examid => {
        this.examid = examid;
        this.data
          .getAnswers(this.userid, this.examid, this.stud.id)
          .subscribe(ans => {
            this.local.setItem("ans", ans).subscribe(ok => {
              console.log(ans);
            });
          });
      });
    });
  }

  ngOnInit() {}
  backBtn() {
    this.router.navigate(["assess"]);
  }
}
