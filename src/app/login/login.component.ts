import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataserviceService } from "../services/dataservice.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { AlertsService } from "angular-alert-module";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private data: DataserviceService,
    private alert: AlertsService,
    private local: LocalStorage
  ) {
    this.alert.setDefaults("timeout", 1.0);
  }
  cred: Observable<any>;

  ngOnInit() {}
  login(event) {
    event.preventDefault();
    let email = event.target.querySelector("#email").value;
    let pass = event.target.querySelector("#password").value;
    if ((email == "" && pass == "") || (email == "" || pass == "")) {
      this.alert.setMessage("Email and password Empty", "error");
    } else if (email != "" && pass != "") {
      this.cred = this.data.authUser(email, pass);
      this.cred.subscribe(da => {
        let sdata = JSON.parse(da);
        // console.log(da);
        if (sdata.status == "success") {
          // console.log(data.data);
          this.alert.setMessage("Please Wait", "success");
          this.local
            .setItem("user", sdata.data)
            .subscribe(() => this.router.navigate(["home"]));
        } else if (sdata.status == "failure") {
          this.alert.setMessage("Incorrect Password", "error");
        } else if (sdata.status == "total failure") {
          this.alert.setMessage("Email Password does not match", "error");
        }
      });
    }
  }
}
