import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegistrationComponent } from './student-registration.component';



@NgModule({
    declarations: [
        StudentRegistrationComponent
    ],
    exports: [
        StudentRegistrationComponent
    ],
    imports: [
        CommonModule
    ]
})
export class StudentRegistrationModule { }
