namespace BloodBankDotNetBackend.DTOs
{
    public class BloodInventoryDto
    {
        public int Id { get; set; }
        public int BloodBankId { get; set; }
        public string BloodType { get; set; }
        public int Quantity { get; set; }
    }
}