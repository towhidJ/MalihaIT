import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStudent} from '../shared/models/student';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = 'https://localhost:44342/api/';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getStudents()
  {
    return this.http.get<IStudent[]>(this.baseUrl + 'students');
  }

  // tslint:disable-next-line:typedef
  addStudent(student: IStudent): Observable<any> {
    return this.http.post(this.baseUrl + 'students', student);
  }

  // tslint:disable-next-line:typedef
  deleteStudent(id)
  {
    return this.http.delete(this.baseUrl + 'students/' + id);
  }


  // tslint:disable-next-line:typedef
  updateStudent(id: number, student: IStudent)
  {
    const endpoint = this.baseUrl + 'students/' + student.id;
    return this.http.put(endpoint, student);
  }

  // tslint:disable-next-line:typedef
  onGetStudent(id: number) {
    return this.http.get<IStudent>(this.baseUrl + 'students/' + id);
  }
}
