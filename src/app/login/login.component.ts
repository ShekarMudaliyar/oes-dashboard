import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataserviceService } from "../services/dataservice.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { LocalStorage } from "@ngx-pwa/local-storage";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private data: DataserviceService,
    private http: HttpClient,
    private local: LocalStorage
  ) {}
  cred: Observable<any>;

  ngOnInit() {}
  login(event) {
    event.preventDefault();
    let email = event.target.querySelector("#email").value;
    let pass = event.target.querySelector("#password").value;
    this.cred = this.data.authUser(email, pass);
    this.cred.subscribe(da => {
      let data = JSON.parse(da);
      // console.log(JSON.parse(data));
      if (data.status == "success") {
        // console.log(data.data);
        this.local
          .setItem("user", data.data)
          .subscribe(() => this.router.navigate(["home"]));
      } else if (data == "failure") {
        console.log("incorrect password");
      } else if (data == "total failure") {
        console.log("email password does not match");
      }
    });
  }
}
