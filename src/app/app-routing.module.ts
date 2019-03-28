import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ExamdetailComponent } from "./home/examdetail/examdetail.component";
import { AdddateComponent } from "./home/examdetail/adddate/adddate.component";
import { AddstudentsComponent } from "./home/examdetail/addstudents/addstudents.component";
import { AddquestionsComponent } from "./home/examdetail/addquestions/addquestions.component";
import { AssessComponent } from "./home/examdetail/assess/assess.component";
import { ResultsComponent } from "./home/examdetail/results/results.component";
import { LoginComponent } from "./login/login.component";
import { FibComponent } from "./home/examdetail/addquestions/fib/fib.component";
import { McqComponent } from "./home/examdetail/addquestions/mcq/mcq.component";
import { BriefComponent } from "./home/examdetail/addquestions/brief/brief.component";
import { CodeComponent } from "./home/examdetail/addquestions/code/code.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "examdetail", component: ExamdetailComponent },
  { path: "adddate", component: AdddateComponent },
  { path: "addstudents", component: AddstudentsComponent },
  {
    path: "addquestions",
    component: AddquestionsComponent,
    children: [
      { path: "fib", component: FibComponent },
      { path: "mcq", component: McqComponent },
      { path: "brief", component: BriefComponent },
      { path: "code", component: CodeComponent }
    ]
  },
  { path: "assess", component: AssessComponent },
  { path: "results", component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
