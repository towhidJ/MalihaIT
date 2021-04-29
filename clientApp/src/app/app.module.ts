import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {StudentModule} from './student/student.module';
import {CourseModule} from './course/course.module';
import {StudentRegistrationModule} from './student-registration/student-registration.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {bsDatepickerReducer} from 'ngx-bootstrap/datepicker/reducer/bs-datepicker.reducer';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StudentModule,
    CourseModule,
    StudentRegistrationModule,
    RouterModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
