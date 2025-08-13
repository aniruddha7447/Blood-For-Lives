using BloodBankDotNetBackend.Entities;

namespace BloodBankDotNetBackend.DTOs
{
    public class AddUserByAdminDto
    {
        public long? Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string ContactNo { get; set; }
        public long? Age { get; set; }
        public Gender Gender { get; set; }
        public DocumentType? DocumentType { get; set; }
        public string UniqueIdNumber { get; set; }
        public Status Status { get; set; }
        public Role Role { get; set; }
    }
}