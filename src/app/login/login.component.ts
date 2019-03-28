import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataserviceService } from "../services/dataservice.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private data: DataserviceService) {}

  ngOnInit() {}
  login(event) {
    event.preventDefault();
    let email = event.target.querySelector("#email").value;
    let pass = event.target.querySelector("#password").value;
    let data = this.data.authUser(email, pass);
    console.log(data);
    this.router.navigate(["home"]);
  }
}
