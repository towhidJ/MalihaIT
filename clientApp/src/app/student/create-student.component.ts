import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {StudentService} from './student.service';
import {IStudent} from '../shared/models/student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  // @ts-ignore
  student = new IStudent();
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  saveStudent(studentForm: NgForm): void {
    console.log(studentForm.value);
  }

  // tslint:disable-next-line:typedef
  addStudent() {
    this.studentService.addStudent(this.student)
      .subscribe(data => {
        console.log(data);
      });
  }
}
