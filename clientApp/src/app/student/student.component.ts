import { Component, OnInit } from '@angular/core';
import {StudentService} from './student.service';
import {IStudent} from '../shared/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: IStudent[];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  // tslint:disable-next-line:typedef
  getStudents()
  {
    this.studentService.getStudents().subscribe(response => {
      this.students = response;
    }, error => {
      console.log(error);
    } );
  }
}
