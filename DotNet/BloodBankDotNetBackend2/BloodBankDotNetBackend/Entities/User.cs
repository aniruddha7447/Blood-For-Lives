
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankDotNetBackend.Entities
{
    [Table("users")]
    public class User : BaseEntity
    {
        [Column("first_name")]
        [MaxLength(25)]
        public required string FirstName { get; set; }

        [Column("last_name")]
        [MaxLength(25)]
        public required string LastName { get; set; }

        [MaxLength(30)]
        public required string Email { get; set; }

        [MaxLength(100)]
        public required string Password { get; set; }

        [Column("contact_number")]
        [MaxLength(15)]
        public required string ContactNo { get; set; }

        public int? Age { get; set; }

        [Column("gender")]
        [EnumDataType(typeof(Gender))]
        [MaxLength(10)]
        public Gender? Gender { get; set; }

        [Column("profile_image")]
        public required string Image { get; set; }

        [EnumDataType(typeof(Role))]
        [MaxLength(30)]
        public Role Role { get; set; } = Role.ROLE_USER;

        // Optional extra field if needed later
        public string? PasswordHash { get; set; }
    }
}
