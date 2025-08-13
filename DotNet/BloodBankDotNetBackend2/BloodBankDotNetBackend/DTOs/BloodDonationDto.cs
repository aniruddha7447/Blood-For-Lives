using BloodBankDotNetBackend.Entities;
using System;

namespace BloodBankDotNetBackend.DTOs
{
    public class BloodDonationDto
    {
        public long? Id { get; set; }
        public string BloodSampleId { get; set; }
        public BloodGroup BloodGroup { get; set; }
        public int BagSize { get; set; }
        public int BagQuantity { get; set; }
        public DateTime? DateOfDonation { get; set; }
        public DateTime? CreationDate { get; set; }
        public User? User { get; set; }
    }
}