using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankDotNetBackend.Entities
{
    [Table("blood_inventory")]
    public class BloodInventory : BaseEntity
    {
        [EnumDataType(typeof(BloodGroup))]
        [MaxLength(15)]
        [Column("blood_group")]
        public BloodGroup? BloodGroup { get; set; }

        [Column("bag_size")]
        public int? BagSize { get; set; }

        [Column("bag_quantity")]
        public int? BagQuantity { get; set; }

        [Column("last_updated_date")]
        public DateTime? LastUpdatedDate { get; set; }
    }
}