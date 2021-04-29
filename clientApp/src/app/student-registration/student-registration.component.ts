import { Component, OnInit } from '@angular/core';
import {StudentRegistrationService} from './student-registration.service';
import {IStudentReg} from '../shared/models/studentRegistration';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceeService} from '../servicee/servicee.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  studentRegs: IStudentReg[];
  constructor(private studentRegService: StudentRegistrationService,
              private previousRouteService: ServiceeService,
              private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    if (this.previousRouteService.getPreviousUrl()) {
      location.reload();
    }
    this.getStudentRegs();
  }

  // tslint:disable-next-line:typedef
  getStudentRegs(){
    this.studentRegService.getStudentRegs().subscribe(response => {
      this.studentRegs = response;
    }, error => {
      console.log(error.message);
    });
  }

  // tslint:disable-next-line:typedef
  deleteEnroll(stReg: IStudentReg) {
    this.studentRegService.deleteEnroll(stReg.studentId, stReg.courseId).subscribe(response => {
      alert('Delete Success');
      this.getStudentRegs();
    });
  }

  // tslint:disable-next-line:typedef
  updateEnroll(stReg: IStudentReg) {
    this._router.navigate(['/enroll-edit', stReg.studentId]);
  }
}
