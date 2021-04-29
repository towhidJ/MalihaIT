import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
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
    return this.http.get<ICourse[]>(this.baseUrl + 'courses');
  }

  // tslint:disable-next-line:typedef
  addCourse(course: ICourse): Observable<any> {
    return this.http.post(this.baseUrl + 'courses', course,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // tslint:disable-next-line:typedef
  deleteCourse(id)
  {
    return this.http.delete(this.baseUrl + 'courses/' + id);
  }


  // tslint:disable-next-line:typedef
  updateCourse(id: number, course: ICourse)
  {
    const endpoint = this.baseUrl + 'courses/' + course.id;
    return this.http.put(endpoint, course);
  }

  // tslint:disable-next-line:typedef
  onGetCourse(id: number) {
    return this.http.get<ICourse>(this.baseUrl + 'courses/' + id);
  }
}
