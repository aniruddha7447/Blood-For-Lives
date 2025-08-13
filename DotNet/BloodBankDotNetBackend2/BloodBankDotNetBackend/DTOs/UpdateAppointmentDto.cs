using BloodBankDotNetBackend.Entities;

namespace BloodBankDotNetBackend.DTOs
{
    public class UpdateAppointmentDto
    {
        public long Id { get; set; }
        public Status Status { get; set; }
    }
}