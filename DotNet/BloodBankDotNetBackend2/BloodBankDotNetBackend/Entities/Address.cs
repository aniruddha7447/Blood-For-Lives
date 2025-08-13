using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankDotNetBackend.Entities
{
    [Table("addresses")]
    public class Address : BaseEntity
    {
        [ForeignKey("User")]
        public long? UserId { get; set; }
        public User? User { get; set; }

        [MaxLength(20)]
        public string? City { get; set; }

        [MaxLength(20)]
        public string? State { get; set; }

        public int? Pincode { get; set; }

        [Column("address")]
        public string? AddressLine { get; set; }

        [Column("is_default")]
        public bool IsDefault { get; set; }
    }
}