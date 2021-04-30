import { Component, OnInit } from '@angular/core';
import {CourseService} from './course.service';
import {ICourse} from '../shared/models/course';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceeService} from '../servicee/servicee.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: ICourse[];
  constructor(private courseService: CourseService,
              private previousRouteService: ServiceeService,
              private _route: ActivatedRoute, private _router: Router){ }

  ngOnInit(): void {
    if (this.previousRouteService.getPreviousUrl()) {

      this.getCourses();
      location.reload();
    }
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

  // tslint:disable-next-line:typedef
  deleteCourse(course: ICourse) {
    this.courseService.deleteCourse(course.id).subscribe(response => {
      alert('Delete Success');
      this.getCourses();
    });
  }

  // tslint:disable-next-line:typedef
  updateCourse(course: ICourse) {
    this._router.navigate(['/course-edit', course.id]);
  }
}
