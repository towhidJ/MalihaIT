import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStudent} from '../shared/models/student';
import { IStudentReg} from '../shared/models/studentRegistration';
import {ICourse} from '../shared/models/course';
import {Observable} from 'rxjs';
import {CStudentReg} from '../shared/models/StudentReg';

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService {

  baseUrl = 'https://localhost:44342/api/';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getStudentRegs()
  {
    return this.http.get<IStudentReg[]>(this.baseUrl + 'StudentRegistrations');
  }

  // tslint:disable-next-line:typedef
  getStudents()
  {
    return this.http.get<IStudent[]>(this.baseUrl + 'students');
  }

  // tslint:disable-next-line:typedef
  addEnroll(studentReg: CStudentReg): Observable<any>  {
    return this.http.post(this.baseUrl + 'StudentRegistrations', studentReg);
  }

  // tslint:disable-next-line:typedef
  getCourses()
  {
    return this.http.get<ICourse[]>(this.baseUrl + 'Courses');
  }

  // tslint:disable-next-line:typedef
  deleteEnroll(studentId: number, courseId: number) {
    return this.http.delete(this.baseUrl + 'StudentRegistrations/' + studentId + '?sid=' + studentId + '&' + 'cId=' + courseId);
  }

  // tslint:disable-next-line:typedef
  onGetStudent(id: number) {
    return this.http.get<CStudentReg>(this.baseUrl + 'StudentRegistrations/' + id);
  }

  // tslint:disable-next-line:typedef
  updateEnroll(studentId: number, studentReg: CStudentReg) {
    const endpoint = this.baseUrl + 'StudentRegistrations/' + studentReg.studentId;
    return this.http.put(endpoint, studentReg);
  }
}
