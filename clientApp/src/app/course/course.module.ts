import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import {FormsModule} from '@angular/forms';
import { AddCourseComponent } from './add-course.component';



@NgModule({
  declarations: [
    CourseComponent,
    AddCourseComponent,
  ],
  exports: [
    CourseComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class CourseModule { }
