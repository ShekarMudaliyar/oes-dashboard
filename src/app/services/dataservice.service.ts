import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class DataserviceService {
  constructor(private http: HttpClient) {}
  // url = "https://oes-backend.herokuapp.com/";
  url = "http://localhost:3000/";
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
  addBrief(ques, ans, userid, examid, marks) {
    return this.http.post(
      `${this.url}addbrief`,
      {
        ques: ques,
        ans: ans,
        userid: userid,
        examid: examid,
        marks: marks
      },
      { responseType: "text" }
    );
  }
  addFib(ques, ans, userid, examid, marks) {
    return this.http.post(
      `${this.url}addfib`,
      {
        ques: ques,
        ans: ans,
        userid: userid,
        examid: examid,
        marks: marks
      },
      { responseType: "text" }
    );
  }
  addCode(ques, userid, examid, marks) {
    return this.http.post(
      `${this.url}addcode`,
      {
        ques: ques,
        userid: userid,
        examid: examid,
        marks: marks
      },
      { responseType: "text" }
    );
  }
  addMcq(ques, op1, op2, op3, op4, userid, examid, marks, ans) {
    return this.http.post(
      `${this.url}addmcq`,
      {
        ques: ques,
        op1: op1,
        op2: op2,
        op3: op3,
        op4: op4,
        userid: userid,
        examid: examid,
        marks: marks,
        ans: ans
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
  getAnswers(userid, examid, studid) {
    return this.http.post(
      `${this.url}getanswers`,
      {
        userid: userid,
        examid: examid,
        studid: studid
      },
      { responseType: "text" }
    );
  }
  fibAssess(userid, examid, studid, quesid, ques, marks, gmarks) {
    return this.http.post(
      `${this.url}assessfib`,
      {
        userid: userid,
        examid: examid,
        studid: studid,
        quesid: quesid,
        ques: ques,
        marks: marks,
        gmarks: gmarks
      },
      { responseType: "text" }
    );
  }
  briefAssess(userid, examid, studid, quesid, ques, marks, gmarks) {
    return this.http.post(
      `${this.url}assessbrief`,
      {
        userid: userid,
        examid: examid,
        studid: studid,
        quesid: quesid,
        ques: ques,
        marks: marks,
        gmarks: gmarks
      },
      { responseType: "text" }
    );
  }
  mcqAssess(userid, examid, studid, quesid, ques, marks, gmarks) {
    return this.http.post(
      `${this.url}assessmcq`,
      {
        userid: userid,
        examid: examid,
        studid: studid,
        quesid: quesid,
        ques: ques,
        marks: marks,
        gmarks: gmarks
      },
      { responseType: "text" }
    );
  }
  accesstest(userid, examid, studid) {
    return this.http.post(
      `${this.url}assessmcq`,
      {
        userid: userid,
        examid: examid,
        studid: studid
      },
      { responseType: "text" }
    );
  }
  results(userid, examid, studid) {
    return this.http.post(
      `${this.url}getresult`,
      {
        userid: userid,
        examid: examid,
        studid: studid
      },
      { responseType: "text" }
    );
  }
}
