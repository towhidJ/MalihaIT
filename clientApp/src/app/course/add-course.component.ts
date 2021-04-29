import { Component, OnInit } from '@angular/core';
import {ICourse} from '../shared/models/course';
import {CourseService} from './course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IStudent} from '../shared/models/student';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  isAddMode: boolean;
  header: string;
  id: number;
  course = new ICourse();
  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.isAddMode = !this.id;
    console.log(this.id);
    this.header = this.id === 0 ? 'Add Course' : 'Edit Course';
    if (this.course.id !== null)
    {
      this.courseService.onGetCourse(this.id).subscribe(res => {
        this.course = res;
        console.log(res);
      });
    }
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this.isAddMode)
    {
      this.addCourse();
    }else {
      this.editCourse();
    }
    this.router.navigate(['course']);
  }

  // tslint:disable-next-line:typedef
  addCourse()
  {
    this.courseService.addCourse(this.course).subscribe((data) => {
      console.log(data);
    });
  }
  // tslint:disable-next-line:typedef
  editCourse() {
    this.courseService.updateCourse(this.course.id, this.course)
      .subscribe(data => {
        console.log(data);
      });
  }
}
