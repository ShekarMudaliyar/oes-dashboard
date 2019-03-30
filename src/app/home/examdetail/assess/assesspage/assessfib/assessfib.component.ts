import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { Student } from "src/app/models/student.model";

@Component({
  selector: "app-assessfib",
  templateUrl: "./assessfib.component.html",
  styleUrls: ["./assessfib.component.scss"]
})
export class AssessfibComponent implements OnInit {
  data;
  constructor(private local: LocalStorage) {
    this.local.getItem<Student>("stud").subscribe(data => {
      this.data = data;
    });
  }

  ngOnInit() {}
}
