namespace BloodBankDotNetBackend.DTOs
{
    public class DonationDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int BloodBankId { get; set; }
        public string BloodType { get; set; }
        public DateTime DonationDate { get; set; }
    }
}