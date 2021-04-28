import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { CreateStudentComponent } from './create-student.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    StudentComponent,
    CreateStudentComponent
  ],
  exports: [
    StudentComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class StudentModule { }
