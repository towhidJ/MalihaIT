import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student/student.component';
import {CourseComponent} from './course/course.component';
import {StudentRegistrationComponent} from './student-registration/student-registration.component';
import {CreateStudentComponent} from './student/create-student.component';
import {CreateStudentRegistrationComponent} from './student-registration/create-student-registration.component';
import {AddCourseComponent} from './course/add-course.component';


const routes: Routes = [
  {path: '', component: StudentComponent},
  {path: 'add-student', component: CreateStudentComponent},
  {path: 'edit/:id', component: CreateStudentComponent},
  {path: 'course', component: CourseComponent},
  {path: 'add-course', component: AddCourseComponent},
  {path: 'course-edit/:id', component: AddCourseComponent},
  {path: 'stdReg', component: StudentRegistrationComponent},
  {path: 'enroll', component: CreateStudentRegistrationComponent},
  {path: 'enroll-edit/:id', component: CreateStudentRegistrationComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentComponent, CourseComponent, StudentRegistrationComponent];
