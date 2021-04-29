import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { CreateStudentComponent } from './create-student.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';



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
        FormsModule,
        RouterModule,
      BsDatepickerModule.forRoot(),
    ]
})
export class StudentModule { }
