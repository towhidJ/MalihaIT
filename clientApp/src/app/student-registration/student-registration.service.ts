import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStudent} from '../shared/models/student';
import {IStudentReg} from '../shared/models/studentRegistration';

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
}
