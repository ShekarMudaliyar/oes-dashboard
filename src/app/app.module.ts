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
import { AddtimeComponent } from "./home/examdetail/addtime/addtime.component";
import { AddstudentsComponent } from "./home/examdetail/addstudents/addstudents.component";
import { AddquestionsComponent } from "./home/examdetail/addquestions/addquestions.component";
import { AssessComponent } from "./home/examdetail/assess/assess.component";
import { ResultsComponent } from "./home/examdetail/results/results.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExamdetailComponent,
    AdddateComponent,
    AddtimeComponent,
    AddstudentsComponent,
    AddquestionsComponent,
    AssessComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config.firebase),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
