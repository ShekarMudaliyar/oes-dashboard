import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "@ngx-pwa/local-storage";

@Component({
  selector: "app-assessmcq",
  templateUrl: "./assessmcq.component.html",
  styleUrls: ["./assessmcq.component.scss"]
})
export class AssessmcqComponent implements OnInit {
  mcq;
  constructor(private local: LocalStorage) {
    this.local.getItem("ans").subscribe(ans => {
      let temp = JSON.parse(ans);
      // console.log(temp[0].fib);
      this.mcq = temp[0].mcq;
      console.log(this.mcq);
    });
  }

  ngOnInit() {}
}
