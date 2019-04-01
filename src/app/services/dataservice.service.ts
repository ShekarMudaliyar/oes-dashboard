import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class DataserviceService {
  constructor(private http: HttpClient) {}
  url = "https://oes-backend.herokuapp.com/"; //"http://localhost:3000/";
  authUser(email: string, pass: string) {
    return this.http.post(
      `${this.url}auth`,
      {
        email: email,
        pass: pass
      },
      { responseType: "text" }
    );
  }
  getExams(userid) {
    return this.http.post(
      `${this.url}getexams`,
      { id: userid },
      { responseType: "text" }
    );
  }
  setExam(userid, examname) {
    return this.http.post(
      `${this.url}setexams`,
      {
        userid: userid,
        exam: examname
      },
      { responseType: "text" }
    );
  }
  addDate(date, timef, timet, userid, examid) {
    return this.http.post(
      `${this.url}setdatetime`,
      {
        date: date,
        timefrom: timef,
        timeto: timet,
        userid: userid,
        examid: examid
      },
      { responseType: "text" }
    );
  }
  getDate(userid, examid) {
    return this.http.post(
      `${this.url}getdate`,
      {
        userid: userid,
        examid: examid
      },
      { responseType: "text" }
    );
  }
  addStud(rollno, name, email, pass, userid, examid) {
    return this.http.post(
      `${this.url}addstudent`,
      {
        rollno: rollno,
        name: name,
        email: email,
        pass: pass,
        userid: userid,
        examid: examid
      },
      { responseType: "text" }
    );
  }
  getStud(userid, examid) {
    return this.http.post(
      `${this.url}getstudents`,
      {
        userid: userid,
        examid: examid
      },
      { responseType: "text" }
    );
  }
  addBrief(ques, ans, userid, examid) {
    return this.http.post(
      `${this.url}addbrief`,
      {
        ques: ques,
        ans: ans,
        userid: userid,
        examid: examid
      },
      { responseType: "text" }
    );
  }
  addFib(ques, ans, userid, examid) {
    return this.http.post(
      `${this.url}addfib`,
      {
        ques: ques,
        ans: ans,
        userid: userid,
        examid: examid
      },
      { responseType: "text" }
    );
  }
  addCode(ques, userid, examid) {
    return this.http.post(
      `${this.url}addcode`,
      {
        ques: ques,
        userid: userid,
        examid: examid
      },
      { responseType: "text" }
    );
  }
  addMcq(ques, op1, op2, op3, op4, userid, examid) {
    return this.http.post(
      `${this.url}addmcq`,
      {
        ques: ques,
        op1: op1,
        op2: op2,
        op3: op3,
        op4: op4,
        userid: userid,
        examid: examid
      },
      { responseType: "text" }
    );
  }
  getQues(userid, examid) {
    return this.http.post(
      `${this.url}getquestions`,
      {
        userid: userid,
        examid: examid
      },
      { responseType: "text" }
    );
  }
}
