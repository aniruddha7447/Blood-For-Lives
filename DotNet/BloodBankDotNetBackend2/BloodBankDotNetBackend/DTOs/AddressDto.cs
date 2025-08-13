using BloodBankDotNetBackend.Entities;

namespace BloodBankDotNetBackend.DTOs
{
    public class AddressDto
    {
        public User? User { get; set; }
        public long? Id { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Pincode { get; set; }
        public string Address { get; set; }
    }
}