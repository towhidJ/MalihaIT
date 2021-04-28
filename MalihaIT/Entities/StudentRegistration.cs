using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MalihaIT.Entities
{
    public class StudentRegistration
    {
        public int StudentId { get; set; }
        public int CourseId { get; set; }
        public DateTime EnrollDate { get; set; }
        public bool IsPaymentComplete { get; set; }

    }
}
