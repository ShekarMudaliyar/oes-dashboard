import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ExamdetailComponent } from "./home/examdetail/examdetail.component";
import { AdddateComponent } from "./home/examdetail/adddate/adddate.component";
import { AddtimeComponent } from "./home/examdetail/addtime/addtime.component";
import { AddstudentsComponent } from "./home/examdetail/addstudents/addstudents.component";
import { AddquestionsComponent } from "./home/examdetail/addquestions/addquestions.component";
import { AssessComponent } from "./home/examdetail/assess/assess.component";
import { ResultsComponent } from "./home/examdetail/results/results.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "examdetail", component: ExamdetailComponent },
  { path: "adddate", component: AdddateComponent },
  { path: "addtime", component: AddtimeComponent },
  { path: "addstudents", component: AddstudentsComponent },
  { path: "addquestions", component: AddquestionsComponent },
  { path: "assess", component: AssessComponent },
  { path: "results", component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
