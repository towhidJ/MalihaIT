import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';



@NgModule({
  declarations: [
    CourseComponent
  ],
  exports: [
    CourseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }
