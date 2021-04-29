using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MalihaIT.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MalihaIT.Entities;

namespace MalihaIT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentRegistrationsController : ControllerBase
    {
        private readonly StudentContext _context;
        private readonly IMapper _mapper;
        public StudentRegistrationsController(StudentContext context ,IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/StudentRegistrations
        [HttpGet]
        public async Task<IReadOnlyList<StudentRegistrationToReturnDto>> GetStudentRegistrations()
        {
            var st = await _context.StudentRegistrations.Include(s=>s.Student).Include(c=>c.Course).ToListAsync();
            var studentDtos = _mapper.Map<IReadOnlyList<StudentRegistration>, IReadOnlyList<StudentRegistrationToReturnDto>>(st);
            return studentDtos;
        }

        // GET: api/StudentRegistrations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentRegistrationToReturnDto>> GetStudentRegistration(int id)
        {
            var studentRegistration = await _context.StudentRegistrations.FindAsync(id);
            var studentDtos = _mapper.Map<StudentRegistration,StudentRegistrationToReturnDto>(studentRegistration);

            if (studentRegistration == null)
            {
                return NotFound();
            }

            return studentDtos;
        }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentRegistration(int id, StudentRegistration studentRegistration)
        {
            if (id != studentRegistration.StudentId)
            {
                return BadRequest();
            }

            _context.Entry(studentRegistration).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentRegistrationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        [HttpPost]
        public async Task<ActionResult> PostStudentRegistration(StudentRegistration studentRegistration)
        {
            _context.StudentRegistrations.Add(studentRegistration);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetStudentRegistration", new { id = studentRegistration.StudentId }, studentRegistration);
        }


        //[HttpPost("postData")]
        //public async Task<IActionResult> postData([FromBody] StudentRegistrationToReturnDto studentD)
        //{
        //    StudentRegistration student = new StudentRegistration
        //    {
        //        StudentId = studentD.StudentId,
        //        CourseId = studentD.CourseId,
        //        EnrollDate = studentD.EnrollDate,
        //        IsPaymentComplete = studentD.IsPaymentComplete
        //    };
        //    _context.StudentRegistrations.Add(student);
        //    await _context.SaveChangesAsync();
        //    return Ok("Success");
        //}


        // DELETE: api/StudentRegistrations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<StudentRegistration>> DeleteStudentRegistration(int sid, int cId)
        {
            var studentRegistration = await _context.StudentRegistrations.Where(c=>c.StudentId==sid && c.CourseId==cId ).FirstOrDefaultAsync();
            if (studentRegistration == null)
            {
                return NotFound();
            }

            _context.StudentRegistrations.Remove(studentRegistration);
            await _context.SaveChangesAsync();

            return studentRegistration;
        }

        private bool StudentRegistrationExists(int id)
        {
            return _context.StudentRegistrations.Any(e => e.StudentId == id);
        }
    }
}
