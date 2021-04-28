import { Component, OnInit } from '@angular/core';
import {CourseService} from './course.service';
import {ICourse} from '../shared/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: ICourse[];
  constructor(private courseService: CourseService){ }

  ngOnInit(): void {
    this.getCourses();
  }

  // tslint:disable-next-line:typedef
  getCourses()
  {
    this.courseService.getCourses().subscribe(response => {
      this.courses = response;
    }, error => {
      console.log(error.message);
    });
  }
}
