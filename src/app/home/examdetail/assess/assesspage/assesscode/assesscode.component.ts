import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { AlertsService } from "angular-alert-module";
import { DataserviceService } from "src/app/services/dataservice.service";
import { FileSaverService } from "ngx-filesaver";

@Component({
  selector: "app-assesscode",
  templateUrl: "./assesscode.component.html",
  styleUrls: ["./assesscode.component.scss"]
})
export class AssesscodeComponent implements OnInit {
  code;
  isLoading = true;
  userid;
  examid;
  studid;
  name;
  constructor(
    private local: LocalStorage,
    private alert: AlertsService,
    private data: DataserviceService,
    private _FileSaverService: FileSaverService
  ) {
    this.local.getItem("ans").subscribe(ans => {
      let temp = JSON.parse(ans);
      // console.log(temp[0].fib);
      this.code = temp[0].code;
      console.log(this.code);
      this.isLoading = false;
      this.studid = temp[0].studentid;
      this.isLoading = false;
    });

    this.local.getItem("user").subscribe(user => {
      this.userid = user._id;

      this.local.getItem("examid").subscribe(examid => {
        this.examid = examid;
      });
    });
    this.alert.setDefaults("timeout", 1.0);
  }
  ngOnInit() {}
  saveFile(ansCode) {
    console.log(ansCode, this.name);
    const txtBlob = new Blob([ansCode], { type: "text" });
    this._FileSaverService.save(txtBlob, "Code.html");
  }
  submitcode(event, item) {
    event.preventDefault();
    console.log(item);
    let marks = event.target.querySelector("#marks").value;
    console.log(marks);
    if (parseInt(item.marks) < marks) {
      this.alert.setMessage("Marks are more than expected", "error");
      this.alert.setDefaults("timeout", 1.0);
    } else if (!marks) {
      this.alert.setMessage("Marks are needed atleast 0", "error");
    } else if (item.marks >= marks) {
      this.data
        .codeAssess(
          this.userid,
          this.examid,
          this.studid,
          item.id,
          item.question,
          item.marks,
          marks
        )
        .subscribe(call => {
          let temp = JSON.parse(call);
          if (temp.n == 1) {
            this.alert.setMessage("Done", "success");
          } else {
            this.alert.setMessage("Not Done", "error");
          }
        });
    }
  }
}
