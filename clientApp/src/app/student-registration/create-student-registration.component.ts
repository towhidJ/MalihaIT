import { Component, OnInit } from '@angular/core';
import {StudentRegistrationService} from './student-registration.service';
import {IStudent} from '../shared/models/student';
import {ICourse} from '../shared/models/course';
import {CStudentReg} from '../shared/models/StudentReg';
import {error} from '@angular/compiler/src/util';
import {NgForm} from '@angular/forms';
import {StudentService} from '../student/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IStudentReg} from '../shared/models/studentRegistration';

@Component({
  selector: 'app-create-student-registration',
  templateUrl: './create-student-registration.component.html',
  styleUrls: ['./create-student-registration.component.css']
})
export class CreateStudentRegistrationComponent implements OnInit {

  students: IStudent[];
  courses: ICourse[];
  studentReg = new CStudentReg();
  constructor(private studentRegService: StudentRegistrationService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getStudents();
    this.getCourse();
  }

  // tslint:disable-next-line:typedef
  getStudents()
  {
    this.studentRegService.getStudents().subscribe(res => {
      this.students = res;
    });
  }

  // tslint:disable-next-line:typedef
  getCourse()
  {
    this.studentRegService.getCourses().subscribe(res => {
      this.courses = res;
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit()
  {
    this.addEnroll();
    this.router.navigate(['stdReg']);
  }

  // tslint:disable-next-line:typedef
  addEnroll() {
    this.studentRegService.addEnroll(this.studentReg)
      .subscribe((data) => {
        console.log(data);
      });
  }


}
