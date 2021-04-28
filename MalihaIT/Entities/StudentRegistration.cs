using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MalihaIT.Entities
{
    public class StudentRegistration
    {
        [ForeignKey("StudentId")]
        public Student Student { get; set; }
        public int StudentId { get; set; }

        [ForeignKey("CourseId")]
        public Course Course { get; set; }
        public int CourseId { get; set; }
        public DateTime EnrollDate { get; set; }
        public bool IsPaymentComplete { get; set; }

        
    }
}
