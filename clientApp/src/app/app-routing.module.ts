import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student/student.component';
import {CourseComponent} from './course/course.component';
import {StudentRegistrationComponent} from './student-registration/student-registration.component';
import {CreateStudentComponent} from './student/create-student.component';


const routes: Routes = [
  {path: '', component: StudentComponent},
  {path: 'add-student', component: CreateStudentComponent},
  {path: 'edit/:id', component: CreateStudentComponent},
  {path: 'course', component: CourseComponent},
  {path: 'stdReg', component: StudentRegistrationComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentComponent, CourseComponent, StudentRegistrationComponent];
