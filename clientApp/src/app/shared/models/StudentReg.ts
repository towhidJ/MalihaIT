import {IStudent} from './student';
import {ICourse} from './course';

export class CStudentReg {
  student: IStudent;
  studentId: number;
  course: ICourse;
  courseId: number;
  enrollDate: Date;
  isPaymentComplete: boolean;
}
