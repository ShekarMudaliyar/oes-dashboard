import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AngularFireModule } from "angularfire2";
import { config } from "./firebase.config";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ExamdetailComponent } from "./home/examdetail/examdetail.component";
import { AdddateComponent } from "./home/examdetail/adddate/adddate.component";
import { AddstudentsComponent } from "./home/examdetail/addstudents/addstudents.component";
import { AddquestionsComponent } from "./home/examdetail/addquestions/addquestions.component";
import { AssessComponent } from "./home/examdetail/assess/assess.component";
import { ResultsComponent } from "./home/examdetail/results/results.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { FibComponent } from "./home/examdetail/addquestions/fib/fib.component";
import { McqComponent } from "./home/examdetail/addquestions/mcq/mcq.component";
import { BriefComponent } from "./home/examdetail/addquestions/brief/brief.component";
import { CodeComponent } from "./home/examdetail/addquestions/code/code.component";
import { AssesspageComponent } from "./home/examdetail/assess/assesspage/assesspage.component";
import { AssessfibComponent } from "./home/examdetail/assess/assesspage/assessfib/assessfib.component";
import { AssessmcqComponent } from "./home/examdetail/assess/assesspage/assessmcq/assessmcq.component";
import { AssessbriefComponent } from "./home/examdetail/assess/assesspage/assessbrief/assessbrief.component";
import { AssesscodeComponent } from "./home/examdetail/assess/assesspage/assesscode/assesscode.component";
import { AlertsModule } from "angular-alert-module";
import { ResultpageComponent } from "./home/examdetail/results/resultpage/resultpage.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { FileSaverModule } from "ngx-filesaver";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExamdetailComponent,
    AdddateComponent,
    AddstudentsComponent,
    AddquestionsComponent,
    AssessComponent,
    ResultsComponent,
    LoginComponent,
    FibComponent,
    McqComponent,
    BriefComponent,
    CodeComponent,
    AssesspageComponent,
    AssessfibComponent,
    AssessmcqComponent,
    AssessbriefComponent,
    AssesscodeComponent,
    ResultpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config.firebase),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    AlertsModule.forRoot(),
    MatProgressSpinnerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FileSaverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
