import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Student } from "src/app/models/student.model";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
  students: Student[] = [
    {
      id: "1",
      rollno: 1,
      name: "shekar",
      email: "shekar@gmail.com",
      pass: "shekar"
    },
    {
      id: "2",
      rollno: 2,
      name: "shekar",
      email: "shekar@gmail.com",
      pass: "shekar"
    }
  ];
  constructor(private router: Router) {}
  backBtn() {
    this.router.navigate(["examdetail"]);
  }
  ngOnInit() {}
  getResult(stud) {
    console.log(stud);
  }
}
