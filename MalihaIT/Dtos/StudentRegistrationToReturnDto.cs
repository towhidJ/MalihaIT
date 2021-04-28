using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MalihaIT.Dtos
{
    public class StudentRegistrationToReturnDto
    {
        public int StudentId { get; set; }
        public int CourseId { get; set; }
        public DateTime EnrollDate { get; set; }
        public bool IsPaymentComplete { get; set; }
        public string StudentName { get; set; }
        public string CourseName { get; set; }
    }
}
