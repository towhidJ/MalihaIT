import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {StudentService} from './student.service';
import {IStudent} from '../shared/models/student';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  // @ts-ignore
  isAddMode: boolean;
  student = new IStudent();
  header: string;
  id: number;
  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.isAddMode = !this.id;
    console.log(this.id);
    this.header = this.id === 0 ? 'Add Student' : 'Edit Student';
    if (this.student.id !== null)
    {
      this.studentService.onGetStudent(this.id).subscribe(res => {
        this.student = res;
        console.log(res);
      });
    }
  }

  saveStudent(studentForm: NgForm): void {
    console.log(studentForm.value);
  }


  // tslint:disable-next-line:typedef
  onSubmit()
  {
    if (this.isAddMode)
    {
      this.addStudent();
    }else {
      this.editStudent();
    }
  }
  // tslint:disable-next-line:typedef
  addStudent() {
    this.studentService.addStudent(this.student)
      .subscribe(data => {
        console.log(data);
      });
  }
  // tslint:disable-next-line:typedef
  editStudent() {
    this.studentService.updateStudent(this.student.id, this.student)
      .subscribe(data => {
        console.log(data);
      });
  }

}
