import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class DataserviceService {
  constructor(private http: HttpClient) {}
  authUser(email: string, pass: string) {
    return this.http.post(
      "http://localhost:3000/auth",
      {
        email: email,
        pass: pass
      },
      { responseType: "text" }
    );
  }
}
