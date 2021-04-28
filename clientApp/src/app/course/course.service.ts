import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStudent} from '../shared/models/student';
import {ICourse} from '../shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = 'https://localhost:44342/api/';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getCourses()
  {
    return this.http.get<ICourse[]>(this.baseUrl + 'Courses');
  }
}
