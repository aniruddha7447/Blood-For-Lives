using BloodBankDotNetBackend.Entities;
using System;

namespace BloodBankDotNetBackend.DTOs
{
    public class SaveAppointmentDto
    {
        public string Name { get; set; }
        public Gender Gender { get; set; }
        public int? Age { get; set; }
        public string DoctorName { get; set; }
        public string Description { get; set; }
        public DateTime? AppointmentScheduleDate { get; set; }
        public Center Center { get; set; }
        public int BagSize { get; set; }
        public int BagQuantity { get; set; }
        public BloodGroup BloodGroup { get; set; }
    }
}