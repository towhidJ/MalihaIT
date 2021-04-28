using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MalihaIT.Entities
{
    public class StudentContext : DbContext
    {
        public StudentContext(DbContextOptions<StudentContext>options):base(options)
        {
            
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Course { get; set; }
        public DbSet<StudentRegistration> StudentRegistrations { get; set; }

        


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StudentRegistration>()
                .HasKey(studentRegistrations => new {
                    studentRegistrations.StudentId,
                    studentRegistrations.CourseId
                });

        }
}
}
