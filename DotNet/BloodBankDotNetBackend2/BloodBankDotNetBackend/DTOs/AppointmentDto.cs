using BloodBankDotNetBackend.Entities;
using System;

namespace BloodBankDotNetBackend.DTOs
{
    public class AppointmentDto
    {
        public User? User { get; set; }
        public long? Id { get; set; }
        public DateTime? AppointmentScheduleDate { get; set; }
        public Center Center { get; set; }
        public int BagSize { get; set; }
        public int BagQuantity { get; set; }
        public Status Status { get; set; }
        public BloodGroup BloodGroup { get; set; }
        public Patient? Patient { get; set; }
    }
}