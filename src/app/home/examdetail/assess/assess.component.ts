import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Student } from "src/app/models/student.model";

@Component({
  selector: "app-assess",
  templateUrl: "./assess.component.html",
  styleUrls: ["./assess.component.scss"]
})
export class AssessComponent implements OnInit {
  constructor(private router: Router) {}
  students: Student[] = [
    {
      id: 1,
      rollno: 1,
      name: "shekar",
      email: "shekar@gmail.com",
      pass: "shekar"
    },
    {
      id: 2,
      rollno: 2,
      name: "shekar",
      email: "shekar@gmail.com",
      pass: "shekar"
    }
  ];
  ngOnInit() {}
  backBtn() {
    this.router.navigate(["examdetail"]);
  }
  getAssess(stud) {
    console.log(stud);
    this.router.navigate(["assesspage"]);
  }
}
