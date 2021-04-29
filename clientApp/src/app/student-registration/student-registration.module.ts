import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegistrationComponent } from './student-registration.component';
import { CreateStudentRegistrationComponent } from './create-student-registration.component';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations: [
        StudentRegistrationComponent,
        CreateStudentRegistrationComponent
    ],
    exports: [
        StudentRegistrationComponent
    ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StudentRegistrationModule { }
