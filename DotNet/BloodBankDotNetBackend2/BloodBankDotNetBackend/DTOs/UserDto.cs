using BloodBankDotNetBackend.Entities;

namespace BloodBankDotNetBackend.DTOs
{
    public class UserDto
    {
        public long? Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ContactNo { get; set; }
        public long? Age { get; set; }
        public Gender Gender { get; set; }
        public string Image { get; set; }
        public DocumentType? DocumentType { get; set; }
        public string UniqueIdNumber { get; set; }
        public Status Status { get; set; } = Status.PENDING;
        public Role Role { get; set; }
    }
}