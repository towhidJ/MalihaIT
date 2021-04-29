import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from './student.service';
import {IStudent} from '../shared/models/student';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceeService} from '../servicee/servicee.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: IStudent[];
  // tslint:disable-next-line:variable-name
  constructor(private studentService: StudentService, private previousRouteService: ServiceeService , private _route: ActivatedRoute, private _router: Router) { }

  // @ts-ignore
  ngOnInit(): void {
    if (this.previousRouteService.getPreviousUrl()) {
      location.reload();
    }
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

  // tslint:disable-next-line:typedef
  deleteStudent(student: IStudent) {
    this.studentService.deleteStudent(student.id).subscribe(response => {
      alert('Delete Success');
      this.getStudents();
    });
  }

  // tslint:disable-next-line:typedef
  updateStudent(student: IStudent) {
    this._router.navigate(['/edit', student.id]);
  }
}
