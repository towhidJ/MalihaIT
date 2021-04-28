import { Component, OnInit } from '@angular/core';
import {StudentRegistrationService} from './student-registration.service';
import {IStudentReg} from '../shared/models/studentRegistration';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  studentRegs: IStudentReg[];
  constructor(private studentRegService: StudentRegistrationService) { }

  ngOnInit(): void {
    this.getStudentRegs();
  }

  // tslint:disable-next-line:typedef
  getStudentRegs(){
    this.studentRegService.getStudentRegs().subscribe(response => {
      this.studentRegs = response;
    }, error => {
      console.log(error.message);
    });
  }
}
