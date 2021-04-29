using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MalihaIT.Dtos;
using MalihaIT.Entities;

namespace MalihaIT
{
    public class MappingProfiles:Profile
    {
        public MappingProfiles()
        {
            CreateMap<StudentRegistration, StudentRegistrationToReturnDto>()
                .ForMember(d => d.StudentName, o => o.MapFrom(s => s.Student.Name))
                .ForMember(d => d.CourseName, o => o.MapFrom(s => s.Course.Title)); 
            

        }
    }
}
