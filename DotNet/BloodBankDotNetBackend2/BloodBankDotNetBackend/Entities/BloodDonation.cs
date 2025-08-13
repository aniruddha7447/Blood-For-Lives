using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankDotNetBackend.Entities
{
    [Table("blood_donations")]
    public class BloodDonation : BaseEntity
    {
        [ForeignKey("User")]
        public long? UserId { get; set; }
        public User? User { get; set; }

        [Column("blood_sample_id")]
        [MaxLength(50)]
        public string? BloodSampleId { get; set; }

        [EnumDataType(typeof(BloodGroup))]
        [MaxLength(15)]
        [Column("blood_group")]
        public BloodGroup? BloodGroup { get; set; }

        [Column("bag_size")]
        public int? BagSize { get; set; }

        [Column("bag_quantity")]
        public int? BagQuantity { get; set; }

        [Column("donation_date")]
        public DateTime? DateOfDonation { get; set; }
    }
}