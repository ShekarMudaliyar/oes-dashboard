import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class DataserviceService {
  constructor(private http: HttpClient) {}
  authUser(email: string, pass: string) {}
}
