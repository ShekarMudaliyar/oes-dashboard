import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "@ngx-pwa/local-storage";

@Component({
  selector: "app-assessfib",
  templateUrl: "./assessfib.component.html",
  styleUrls: ["./assessfib.component.scss"]
})
export class AssessfibComponent implements OnInit {
  fib;
  constructor(private local: LocalStorage) {
    this.local.getItem("ans").subscribe(ans => {
      let temp = JSON.parse(ans);
      // console.log(temp[0].fib);
      this.fib = temp[0].fib;
      console.log(this.fib);
    });
  }

  ngOnInit() {}
}
