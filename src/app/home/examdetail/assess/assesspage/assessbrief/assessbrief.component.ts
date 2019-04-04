import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "@ngx-pwa/local-storage";

@Component({
  selector: "app-assessbrief",
  templateUrl: "./assessbrief.component.html",
  styleUrls: ["./assessbrief.component.scss"]
})
export class AssessbriefComponent implements OnInit {
  brief;
  constructor(private local: LocalStorage) {
    this.local.getItem("ans").subscribe(ans => {
      let temp = JSON.parse(ans);
      // console.log(temp[0].fib);
      this.brief = temp[0].brief;
      console.log(this.brief);
    });
  }
  ngOnInit() {}
}
