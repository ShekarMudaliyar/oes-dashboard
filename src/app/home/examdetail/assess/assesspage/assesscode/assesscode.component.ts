import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "@ngx-pwa/local-storage";

@Component({
  selector: "app-assesscode",
  templateUrl: "./assesscode.component.html",
  styleUrls: ["./assesscode.component.scss"]
})
export class AssesscodeComponent implements OnInit {
  code;
  constructor(private local: LocalStorage) {
    this.local.getItem("ans").subscribe(ans => {
      let temp = JSON.parse(ans);
      // console.log(temp[0].fib);
      this.code = temp[0].code;
      console.log(this.code);
    });
  }
  ngOnInit() {}
}
