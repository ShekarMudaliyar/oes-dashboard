import { Component, OnInit } from "@angular/core";
import { Student } from "src/app/models/student.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-addstudents",
  templateUrl: "./addstudents.component.html",
  styleUrls: ["./addstudents.component.scss"]
})
export class AddstudentsComponent implements OnInit {
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
  constructor(private router: Router) {}
  backBtn() {
    this.router.navigate(["examdetail"]);
  }
  ngOnInit() {}
}
